export default function MainPage() {


    return (
        
            
            <main className="home-page py-5">
                <div className="container">

                    {/* Title */}
                    <h1 className="text-center text-black py-2">Altro che amazon!</h1>
                    <p className="text-body-tertiary fw-semibold">Scopri le migliori offerte per te.</p>

                    {/*Login section */}

                    <section>
                        <form className="row justify-content-center flex-column align-items-center gap-3">
                            {/* Email input */}
                            <div className="col-6">

                                <label className="form-label fw-semibold fs-3 " htmlFor="email">Email</label>
                                <input className="form-control form-control-sm" id="email" name="email" type="email" placeholder="esempio@email.com" />
                                <span className="form-text">Inserisci qui la tua email.</span>

                            </div>

                            {/* Password input  */}
                            <div className="col-6">

                                <label className="form-label fw-semibold fs-3 " htmlFor="password">Password</label>
                                <input className="form-control form-control-sm" type="password" name="password" id="password" placeholder="password..." />
                                <span className="form-text">Inserisci qui la tua password</span>
                            </div>

                            {/* Login buttons */}
                            <div className="col-12 d-flex flex-column justify-content-center align-items-center gap-2 p-3">

                                <button className="btn btn-success d-block">Accedi</button>
                                <span className="fw-semibold">o</span>
                                <button className="btn btn-danger">Sei nuovo? Registrati!</button>

                            </div>

                        </form>
                    </section>

                    {/* Socials list */}
                    <ul className="m-0 p-3">
                        <li><i class="bi bi-instagram"></i></li>
                        <li><i class="bi bi-facebook"></i></li>
                        <li><i class="bi bi-youtube"></i></li>
                        <li><i class="bi bi-whatsapp"></i></li>
                        <li><i class="bi bi-tiktok"></i></li>
                    </ul>

                </div>
            </main>
        
    )
}