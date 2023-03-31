package com.ssafy.sulnaeeum.rabbitmq;

import com.ssafy.sulnaeeum.model.jubti.dto.JubtiResultDto;
import org.springframework.amqp.rabbit.annotation.RabbitListener;
import org.springframework.stereotype.Component;

@Component
public class Consumer {

//    // 메시지 받기
//    @RabbitListener(queues = "sulnaeeum.queue")
//    public void consume(JubtiResultDto jubtiResultDto) {
//        System.out.println("@@@ jubti @@@" + jubtiResultDto.getSex());
//    }
}
