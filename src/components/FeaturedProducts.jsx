import Productsgrid from "./Productsgrid"
import SectionTitle from "./SectionTitle"

const FeaturedProducts = () => {
  return (
    <div className="pt-24">
      <SectionTitle text='featured products'/>
      <Productsgrid />
    </div>
  )
}

export default FeaturedProducts
