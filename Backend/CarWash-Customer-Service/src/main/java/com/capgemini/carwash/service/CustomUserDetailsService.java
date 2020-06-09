package com.capgemini.carwash.service;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.capgemini.carwash.entity.Customer;
import com.capgemini.carwash.entity.Role;
import com.capgemini.carwash.repository.CustomerRepository;
import com.capgemini.carwash.repository.RoleRepository;

@Service
public class CustomUserDetailsService implements UserDetailsService {

	@Autowired
	private CustomerRepository userRepository;
	
	@Autowired
	private RoleRepository roleRepository;
	
	@Autowired
	private PasswordEncoder bCryptPasswordEncoder;
	
	public Customer findUserByEmail(String email) {
	    return userRepository.findByEmail(email);
	}
	
	public void saveUser(Customer cust) {
		cust.setPassword(bCryptPasswordEncoder.encode(cust.getPassword()));
	//	cust.setEnabled(true);
	    Role userRole = roleRepository.findByRole("ADMIN");
	    cust.setRoles(new HashSet<>(Arrays.asList(userRole)));
	    userRepository.save(cust);
	}
	
	@Override
	public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {

	    Customer customer = userRepository.findByEmail(email);
	    if(customer != null) {
	        List<GrantedAuthority> authorities = getUserAuthority(customer.getRoles());
	        return buildUserForAuthentication(customer, authorities);
	    } else {
	        throw new UsernameNotFoundException("username not found");
	    }
	}
	
	private List<GrantedAuthority> getUserAuthority(Set<Role> userRoles) {
	    Set<GrantedAuthority> roles = new HashSet<>();
	    userRoles.forEach((role) -> {
	        roles.add(new SimpleGrantedAuthority(role.getRole()));
	    });

	    List<GrantedAuthority> grantedAuthorities = new ArrayList<>(roles);
	    return grantedAuthorities;
	}
	
	private UserDetails buildUserForAuthentication(Customer customer, List<GrantedAuthority> authorities) {
	    return new org.springframework.security.core.userdetails.User(customer.getEmail(), customer.getPassword(), authorities);
	}
}