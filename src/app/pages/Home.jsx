import React, { useEffect, useState } from "react";
import { FaLongArrowAltRight } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation, Autoplay } from "swiper/modules";

import Layout from "./Layout";
import { Link } from "react-router-dom";
import ProductCard from "../components/common/ProductCard";
import { api } from "../../utils/api";

const HomeBlackWhite = () => {
  const [products, setproducts] = useState([]);
  const [filters, setfilter] = useState([]);
  const [checked] = useState([]);
  const [page, setpage] = useState(1);
  const [perpage] = useState(20);

  const filterProducts = async () => {
    try {
      const res = await fetch(
        `${api}/api/v1/products?checked=${checked}&filters=${filters}&perpage=${perpage}&page=${page}`
      );

      const data = await res.json();
      setproducts(data.products);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    filterProducts();
    // eslint-disable-next-line
  }, [checked, filters, page]);

  const slides = [
    {
      image:
        "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1727089459/Croma%20Assets/CMS/LP%20Page%20Banners/2024/Pujo/HP%20Rotating%20Banners/HP_DurgaPuja_23Sep2024_xebhss.png",
      label: "Banner image",
    },

    {
      image:
        "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1727442866/Croma%20Assets/CMS/Homepage%20Banners/HP%20Rotating/2024/Sep/28092024/HP_Rotating_OneplusNordCE4Lite_28Sep2024_bppgex.jpg",
      label: "oneplus Smartphone image",
    },
    {
      image:
        "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1727500084/Croma%20Assets/CMS/LP%20Page%20Banners/2024/Sanity/HP/Sept/28092024/HP_Rotating_BTS_28Sep2024_xpucwh.jpg",
      label: "Best Deal Bluethooth Speaker",
    },
    {
      image:
        "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1727500084/Croma%20Assets/CMS/LP%20Page%20Banners/2024/Sanity/HP/Sept/28092024/HP_Rotating_Cameras_28Sep2024_oaj4hg.jpg",
      label: "Mini 12 Canvas Camera",
    },
  ];

  const categoryphotos = [
    {
      image:
        "https://www.transparentpng.com/download/laptop/9oRuDc-refreshed-pavilion-gaming-series-launching-next-month.png",
      label: "Laptop",
    },

    {
      image:
        "https://images.philips.com/is/image/philipsconsumer/b8992131d5a3401e9d6eb0c300d8f4fe?$pnglarge$&wid=1250",
      label: "Headphones",
    },
    {
      image:
        "https://www.pngplay.com/wp-content/uploads/9/Apple-Watch-Transparent-Free-PNG.png",
      label: "Watches",
    },
    {
      image:
        "https://static.vecteezy.com/system/resources/previews/036/731/864/non_2x/ai-generated-3d-isolated-render-of-power-bank-free-png.png",
      label: "PowerBanks",
    },
    {
      image:
        "https://motorolauk.vtexassets.com/arquivos/ids/159920-800-auto?width=800&height=auto&aspect=true",
      label: "Smartphones",
    },
    {
      image:
        "https://png.pngtree.com/png-vector/20240521/ourmid/pngtree-white-cable-airpods-on-transparent-background-png-image_12496064.png",
      label: "AirPods",
    },
  ];

  return (
    <Layout title="Home - SwiftPick">
      <div id="carouselExampleCaptions" className="relative w-full">
        {/* Carousel items */}
        <div className="relative w-full overflow-hidden after:clear-both  after:block after:content-['']">
          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            loop={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Pagination, Navigation, Autoplay]}
            className="mySwiper flex-shrink"
          >
            {slides?.map((slide, index) => {
              return (
                <SwiperSlide key={index}>
                  <div className="flex justify-center items-center  text-xl">
                    <img
                      src={slide?.image}
                      alt={slide.label}
                      className="w-full"
                    />
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>

      <div className=" py-8 grid grid-cols-3 lg:grid-cols-6 sm:grid-cols-4 gap-4">
        {categoryphotos?.map((photos, index) => {
          return (
            <Link to={`/products/${photos.label}`} key={index}>
              <div
                
                className=" flex flex-col items-center justify-center   bg-gray-100 "
              >
                <img
                  src={photos?.image}
                  alt={photos.label}
                  className="w-3/5 h-3/4 object-contain rounded-full"
                />
                <h1 className="text-indigo-500 text-sm sm:text-md font-medium text-center">
                  {photos.label}
                </h1>
              </div>
            </Link>
          );
        })}
      </div>
      {/* Product List Section - Limited to 6 Products */}
      <div className=" py-2 px-4 mx-auto  ">
        <div className="flex justify-between items-center uppercase">
          <h1 className="text-lg font-bold sm:font-bold sm:text-xl text-indigo-500  ">
            featured Products
          </h1>
          <Link
            to="/products/all"
            className="flex items-center gap-2 hover:underline py-3 font-medium text-indigo-500 font px-4"
          >
            see all products
            <FaLongArrowAltRight className="text-xl" />
          </Link>
        </div>
        <div className="mt-6 py-2 grid grid-cols-1 gap-x-8  gap-y-10 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 lg:grid-cols-4   lg:gap-x-8 xl:gap-x-8  ">
          {products?.map((product, id) => {
            return <ProductCard product={product} key={id} />;
          })}
        </div>
      </div>
     
    </Layout>
  );
};

export default HomeBlackWhite;
