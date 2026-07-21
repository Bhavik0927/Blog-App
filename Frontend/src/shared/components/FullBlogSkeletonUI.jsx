import "../../shared/styles/CSS/FullBlogSkeleton.css";

const FullBlogSkeleton = () => {
  return (
    <div className="fullblog_maincontainer">
      <div className="fullblog_container">

        {/* Title */}
        <div className="skeleton title-skeleton"></div>
        <div className="skeleton title-skeleton short"></div>

        {/* Profile */}
        <div className="profile_container">
          <div className="skeleton profile-img-skeleton"></div>
          <div className="skeleton profile-name-skeleton"></div>
          <div className="skeleton follow-btn-skeleton"></div>
          <div className="skeleton small-text-skeleton"></div>
          <div className="skeleton small-text-skeleton"></div>
        </div>

        {/* Like & Save */}
        <div className="like-save_container">
          <div className="skeleton icon-text-skeleton"></div>

          <div className="share-container">
            <div className="skeleton icon-skeleton"></div>
            <div className="skeleton icon-skeleton"></div>
            <div className="skeleton icon-skeleton"></div>
          </div>
        </div>

        {/* Blog Image */}
        <div className="skeleton blog-image-skeleton"></div>

        {/* Illustration */}
        <div className="illustrate_block">
          <div className="skeleton illustration-skeleton"></div>
        </div>

        {/* Content */}
        <div className="blog-content">
          {Array.from({ length: 10 }).map((_, index) => (
            <div
              key={index}
              className={`skeleton paragraph-skeleton ${
                index === 9 ? "short" : ""
              }`}
            ></div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default FullBlogSkeleton;