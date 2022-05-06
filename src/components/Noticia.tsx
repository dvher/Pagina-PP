

export default function Noticia(props: any) {

    return (

        <div className="full-screen center-screen common-background-color">

            <div className="container" style={{textAlign: 'center'}}>
                <div className="row">
                    <div className="col">
                        <h1 style={{fontWeight: 'bolder', fontSize: '2em'}}>Título de Noticia</h1>
                        <div className="row">
                            <div className="col">
                                <img src="https://via.placeholder.com/300" style={{width: '2em', height: '2em', padding: '0.1em'}} alt="Avatar de Autor" className="img-fluid" />
                                Nombre de Autor
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        Noticia
                    </div>
                </div>
            </div>

        </div>

    );

}