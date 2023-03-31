package com.ssafy.sulnaeeum.rabbitmq;

import com.ssafy.sulnaeeum.model.jubti.dto.JubtiResultDto;
import lombok.RequiredArgsConstructor;
import org.springframework.amqp.rabbit.core.RabbitTemplate;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class Producer {

    private final RabbitTemplate rabbitTemplate;

    // 메시지 전송
    public void sendMessage(JubtiResultDto jubtiResultDto) {
        rabbitTemplate.convertAndSend("sulnaeeum.exchange", "sulnaeeum.key", jubtiResultDto);
    }
}
