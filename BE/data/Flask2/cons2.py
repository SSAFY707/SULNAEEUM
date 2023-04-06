import pika
import requests

HOST_NAME = "j8a707.p.ssafy.io"

QUEUE_NAME = "sulnaeeum.queue"


def main():
    connection = pika.BlockingConnection(pika.ConnectionParameters(host=HOST_NAME))
    # connection = pika.BlockingConnection(pika.URLParameters('amqp://guest:guest@j8a707.p.ssafy.io:5672'))
    channel = connection.channel()

    channel.queue_declare(queue=QUEUE_NAME, durable=True)
    channel.basic_qos(prefetch_count=1)

    def callback(ch, method, properties, body):
        print("Message is Arrived %r" % body)
        response = requests.get("https://j8a707.p.ssafy.io/flask2/rabbit/ranking")
        print(response)



    channel.basic_consume(queue=QUEUE_NAME,
                          on_message_callback=callback,
                          auto_ack=True)

    try:
        print("Waiting for messages.")
        channel.start_consuming()
    except KeyboardInterrupt:
        print('Ctrl+C is Pressed.')


if __name__ == '__main__':
    main()