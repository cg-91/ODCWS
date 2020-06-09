package com.capgemini.service;

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

import com.capgemini.entity.Role;
import com.capgemini.entity.Washer;
import com.capgemini.repository.RoleRepository;
import com.capgemini.repository.WasherRepository;

@Service
public class CustomUserDetailsService implements UserDetailsService {

	@Autowired
	private WasherRepository washerRepository;
	
	@Autowired
	private RoleRepository roleRepository;
	
	@Autowired
	private PasswordEncoder bCryptPasswordEncoder;
	
	public Washer findUserByEmail(String email) {
	    return washerRepository.findByEmail(email);
	}
	
	public void saveUser(Washer wash) {
		wash.setPassword(bCryptPasswordEncoder.encode(wash.getPassword()));
	//	wash.setEnabled(true);
	    Role userRole = roleRepository.findByRole("ADMIN");
	    wash.setRoles(new HashSet<>(Arrays.asList(userRole)));
	    washerRepository.save(wash);
	}
	
	@Override
	public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {

	    Washer wahser = washerRepository.findByEmail(email);
	    if(wahser != null) {
	        List<GrantedAuthority> authorities = getUserAuthority(wahser.getRoles());
	        return buildUserForAuthentication(wahser, authorities);
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
	
	private UserDetails buildUserForAuthentication(Washer wahser, List<GrantedAuthority> authorities) {
	    return new org.springframework.security.core.userdetails.User(wahser.getEmail(), wahser.getPassword(), authorities);
	}
}