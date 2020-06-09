package com.capgemini.carwash.controller;

import lombok.Data;

@Data
public class AuthBody {

	private String email;
    private String password;
}