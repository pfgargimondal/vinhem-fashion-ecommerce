import "./Css/PolicyComponent.css";

export const PolicyComponent = ({PolicyDetails}) => {
  return (
    <div>
      <div className="banner postion-relative text-center">
        {PolicyDetails.data?.banner_image && (
          <img
            src={`${PolicyDetails.image_url}/${PolicyDetails.data.banner_image}`}
            className="img-fluid"
            alt=""
          />
        )}
      </div>

      <div className="dhgdfhgdfg">
        <div className="container">
          <h1 className="mb-4">
            {PolicyDetails.data?.title &&
              PolicyDetails.data.title}
          </h1>

          <div
            dangerouslySetInnerHTML={{
              __html:
                PolicyDetails.data?.description &&
                PolicyDetails.data.description,
            }}
          />
        </div>
      </div>
    </div>
  );
};
