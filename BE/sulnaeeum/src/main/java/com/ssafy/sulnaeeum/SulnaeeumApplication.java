package com.ssafy.sulnaeeum;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.scheduling.annotation.EnableScheduling;

@SpringBootApplication
@EnableScheduling
public class SulnaeeumApplication {

	public static void main(String[] args) {
		SpringApplication.run(SulnaeeumApplication.class, args);
	}
}
