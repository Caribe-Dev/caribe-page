import Slider from 'react-slick'

export function Carousel ({ className, children, ...props }) {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    autoplay: true,
    responsive: [
      {
        breakpoint: 448,
        settings: {
          slidesToShow: 1,
        }
      },
      {
        breakpoint: 664,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 860,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 1070,
        settings: {
          slidesToShow: 4,
        }
      }
    ],
    ...props
  }

  return (
    <Slider classNames={className} {...settings}>
      {children}
    </Slider>
  )
}