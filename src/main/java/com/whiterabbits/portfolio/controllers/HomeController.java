package com.whiterabbits.portfolio.controllers;

import java.io.Console;
import java.util.Date;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HomeController {

    @RequestMapping(value = "/")
    public String index2S() {
        return "index";
    }

    @RequestMapping(value = "/api/hello")
    public String index() {
        System.out.println("///////////////////////Hello, the time at the server is now");
        return "Hello, the time at the server is now " + new Date() + "\n";
    }

}