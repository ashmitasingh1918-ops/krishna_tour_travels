import { useParams } from "react-router-dom";
import packages from "../data/packages";

function PackageDetails() {

  const { packageId } = useParams();

  const packageData = packages.find(
    item => item.id === packageId
  );

  if (!packageData) {
    return <h2>Package Not Found</h2>;
  }

  return (
    <div className="container py-5">

      <h1>{packageData.title}</h1>

      <p>{packageData.duration}</p>

      <h3>{packageData.price}</h3>

      <p>{packageData.overview}</p>

    </div>
  );
}

export default PackageDetails;