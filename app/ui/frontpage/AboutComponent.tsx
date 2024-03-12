import React from 'react';

const AboutComponent = () => {
    return (
        <div className="rounded-xl py-2 md:py-8 px-4 shadow-md flex flex-nowrap flex-col md:flex-row justify-between items-center my-4 md:my-8 md:my-12">
        <span className="text-3xl mr-4 md:text-5xl font-bold text-indigo-800 uppercase items-center text-center">
          Boundary
        </span>
            <div className="text-lg text-start">
                Это сервис доставки товаров от известных зарубежных брендов по честным и прозрачным ценам.
                <p>
                    Наша задача - упростить и улучшить вашу жизнь, ведь всю основную волокиту с оформлением,
                    оплатой, отгрузкой и доставкой товаров мы берем на себя!
                </p>
            </div>
        </div>
    );
}

export default AboutComponent;
