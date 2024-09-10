import SectionTtle from "../../../components/SectionTitle/SectionTtle";
import chefImg from '../../../assets/home/chef-service.jpg';

const Recommends = () => {
  return (
    <section className="container">
      <SectionTtle
        subHeading="should try"
        heading="chef's choice"
      >
      </SectionTtle>
      <div className="flex flex-col-1 gap-6">
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
          <figure><img src={chefImg} alt="Shoes" className="aspect-video" /></figure>
          <div className="card-body">
            <h2 className="card-title">Ceaser salad</h2>
            <p>lattuce,meaonise,chiken</p>
            <div className="card-actions justify-center">
              <button className="btn btn-primary btn-outline border-0 border-b-4">Add to cart</button>
            </div>
          </div>
        </div>
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
          <figure><img src={chefImg} alt="Shoes" className="aspect-video" /></figure>
          <div className="card-body">
            <h2 className="card-title">Ceaser salad</h2>
            <p>lattuce,meaonise,chiken</p>
            <div className="card-actions justify-center">
              <button className="btn btn-primary btn-outline border-0 border-b-4">Add to cart</button>
            </div>
          </div>
        </div>
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
          <figure><img src={chefImg} alt="Shoes" className="aspect-video" /></figure>
          <div className="card-body">
            <h2 className="card-title">Ceaser salad</h2>
            <p>lattuce,meaonise,chiken</p>
            <div className="card-actions justify-center ">
              <button className="btn btn-primary btn-outline border-0 border-b-4">Add to cart</button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Recommends;