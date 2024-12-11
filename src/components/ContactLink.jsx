export function ContactLink() {
    const email = "garcisdaniel@gmail.com";
    const subject = "Contacto desde tu portafolio";
    const body = "Hola, me gustaría ponerme en contacto contigo.";

    return (
        <a
            href={`mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`}
            className="pf-contact-link button-slide slide_right"
        >
            Garcisdaniel@gmail.com
        </a>
    );
}
