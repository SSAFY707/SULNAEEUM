package com.ssafy.sulnaeeum.model.rabbitmq.service;

import org.springframework.amqp.rabbit.annotation.RabbitListener;
import org.springframework.stereotype.Component;

@Component
public class Consumer {

    // 메시지 받기
    @RabbitListener(queues = "sulnaeeum.queue")
    public void consume(String response) {
        System.out.println(response);
    }
}
