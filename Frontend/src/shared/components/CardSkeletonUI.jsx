import "../../shared/styles/CSS/CardSkeleton.css";

const CardSkeletonUI = () => {
  return (
    <div className="main_card_info skeleton-card">

      {/* User Info */}
      <div className="created_user_container">
        <div className="skeleton skeleton-avatar"></div>
        <div className="skeleton skeleton-user-text"></div>
      </div>

      {/* Content */}
      <div className="main_content_container">
        <div className="content_block">
          <div className="skeleton skeleton-title"></div>
          <div className="skeleton skeleton-title short"></div>

          <div className="skeleton skeleton-para"></div>
          <div className="skeleton skeleton-para"></div>
          <div className="skeleton skeleton-para small"></div>
        </div>

        <div className="blog_image">
          <div className="skeleton skeleton-image"></div>
        </div>
      </div>

      {/* Footer */}
      <div className="date_container">
        <div className="date_heart_block">
          <div className="skeleton skeleton-date"></div>
          <div className="skeleton skeleton-like"></div>
        </div>

        <div className="skeleton skeleton-bookmark"></div>
      </div>
    </div>
  );
};

export default CardSkeletonUI;