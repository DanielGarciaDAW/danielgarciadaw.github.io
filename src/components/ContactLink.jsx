export function ContactLink() {
    const email = "garcisdaniel@gmail.com";
    const subject = "Contacto desde tu portfolio";
    const body = "Hola, me gustaría ponerme en contacto contigo.";

    return (
        <a
            href={`mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`}
            className="pf-contact-link">
            Escríbeme
        </a>
    );
}
