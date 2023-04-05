import pika
import requests

HOST_NAME = "j8a707.p.ssafy.io"
QUEUE_NAME = "sulnaeeum.queue"


def main():
    connection = pika.BlockingConnection(pika.ConnectionParameters(host=HOST_NAME))
    channel = connection.channel()

    channel.queue_declare(queue=QUEUE_NAME)

    def callback(ch, method, properties, body):
        print("Message is Arrived %r" % body)
        response = requests.get("https://j8a707.p.ssafy.io/flask/rabbit/ranking")
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