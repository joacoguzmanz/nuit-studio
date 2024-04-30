import Image from "next/image";
import Link from "next/link";

const Home = () => {
    return (
        <main className='container'>
            <div className='container-left'>
                <div className="content-top">
                    <Link href='/'>Nuit Studio</Link>
                </div>
                <div className="content-body">
                    <div className="description">
                        <h1>En construcción...</h1>
                        <p>Estamos preparando nuestro sitio, pero podés contactarnos para convesar sobre tus
                            necesidades y comenzar a dar forma a tu proyecto.</p>
                    </div>

                    <div className="contact-container">
                        <div className="mail-contact">
                            <h2 className="contact-title">Dejanos un correo</h2>
                            <a href="mailto:hola@nuitstudio.com" className="contact-text">hola@nuitstudio.com</a>
                        </div>
                        <div className="phone-contact">
                            <h2 className="contact-title">Envianos un mensaje</h2>
                            <a href="https://wa.me/34692955504?text=Hola!%20"
                               target="_blank"
                               className="contact-text">+34 692 95 55 04</a>
                        </div>
                    </div>
                </div>
                <div className="content-bottom">
                    <p className="location-footer">Barcelona, ESP</p>
                    <p className="location-footer">Buenos Aires, ARG</p>
                </div>
            </div>

            <div className='container-right'>
                <Image src={'/soon-image.jpg'} alt={'Galaxy image'} fill={true} style={{objectFit: 'cover'}} priority={true}/>
            </div>
        </main>
    );
}

export default Home;