import React from 'react';
import './BrandLogos.css';

const BrandLogos = () => {
    const brands = [
        { name: 'HP', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/HP_logo_2012.svg/200px-HP_logo_2012.svg.png' },
        { name: 'Dell', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Dell_Logo.svg/200px-Dell_Logo.svg.png' },
        { name: 'Lenovo', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Lenovo_logo_2015.svg/200px-Lenovo_logo_2015.svg.png' },
        { name: 'Asus', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/ASUS_Logo.svg/200px-ASUS_Logo.svg.png' },
        { name: 'Acer', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Acer_2011.svg/200px-Acer_2011.svg.png' },
        { name: 'Apple', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/200px-Apple_logo_black.svg.png' }
    ];

    return (
        <section className="brands-section py-5">
            <div className="container">
                <h3 className="text-center mb-4 fw-bold">Nos Marques Partenaires</h3>
                <div className="row g-4 align-items-center justify-content-center">
                    {brands.map((brand, index) => (
                        <div key={index} className="col-6 col-md-4 col-lg-2">
                            <div className="brand-logo-container">
                                <img
                                    src={brand.logo}
                                    alt={brand.name}
                                    className="brand-logo"
                                    onError={(e) => {
                                        e.target.style.display = 'none';
                                    }}
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default BrandLogos;
