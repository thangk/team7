import { Navigate, useParams } from "react-router-dom";
import { useSelector } from 'react-redux'


const LoremPages = () => {

  // @ts-ignore
  const currentTheme = useSelector(state => state.theme.current)

  let pageTitle: string;

  const { lorem } = useParams();

  switch (lorem) {
    case "careers":
      pageTitle = "Career";
      break;
    case "consumer-care":
      pageTitle = "Consumer Care";
      break;
    case "our-watches":
      pageTitle = "Our Watches";
      break;
    case "iwca":
      pageTitle = "Canada Locations";
      break;
    case "iwus":
      pageTitle = "U.S.A. Locations";
      break;
    case "success-stories":
      pageTitle = "Success Stories";
      break;
    case "terms-of-service":
      pageTitle = "Terms of Service";
      break;
    case "privacy-policy":
      pageTitle = "Privacy Policy";
      break;
    case "accessibility-statement":
      pageTitle = "Accessibility Statement";
      break;
    default:
      pageTitle = "404";
      break;
  }

  return (
    <>
      {pageTitle === "404" ? (
        <Navigate to="/404" />
      ) : (
        <>
          {/* <ScrollToTop smooth /> */}
          <main className={`lorempage-wrapper theme-text-${currentTheme}-1 `}>
            <h1 className="page-title">{pageTitle}</h1>

            <div className={`lorempage-content-wrapper theme-border-${currentTheme}-light`}>
              <p>
                Lorem ipsum dolor sit amet. A aperiam Quis et repellendus quisquam aut nesciunt pariatur eum facere
                animi. Ab quasi dolorem et molestiae culpa sed aliquam deserunt non eligendi quia. 33 omnis accusantium
                est sint dignissimos qui iure aliquid et vero ullam rem deleniti voluptas rem repellendus ipsum! Qui
                omnis accusamus non illo autem eos sunt molestias sed deleniti sunt qui placeat veritatis eos porro
                ipsam. Et neque molestiae vel voluptas vero ea molestiae quia et fugit perspiciatis ea dolor libero ea
                minus illum eum architecto dolorem. Sed amet distinctio nam aperiam laudantium eos maxime culpa. In
                dolore fugit aut sequi quia in quam nihil in inventore tempore est adipisci provident rem fuga tempore
                nam perferendis doloremque! Sed eaque nihil et sint impedit et sint voluptate vel nesciunt nobis sed
                excepturi inventore eum cumque saepe?
              </p>
              <p>
                Et nisi internos aut deserunt vitae non iste ipsum sit reprehenderit amet qui corrupti obcaecati et
                eveniet numquam quo magnam quas. Qui consectetur officiis et eius soluta est eius dolorem qui minus
                totam! Quo vero numquam et reiciendis minima ex sint excepturi sed nisi similique et molestias enim quo
                corrupti culpa. Sit voluptatem earum aut culpa temporibus ut similique possimus est culpa repudiandae et
                enim eveniet non doloremque eius. Eos culpa tempora sed tempore consectetur cum veritatis maiores ad
                explicabo magni ad quia perferendis. Ea praesentium voluptate id accusamus sequi quo molestias numquam
                est assumenda asperiores eos veritatis galisum? Et tempora optio et eligendi nemo est eveniet natus in
                earum labore ut distinctio minima aut velit labore. Et maiores deleniti id unde esse ut repellat
                perspiciatis?
              </p>
              <p>
                Ut dolorem quasi ab velit voluptate non provident nihil ut voluptatem dicta est dolorum quia. Et aperiam
                sunt ut autem consequuntur eum excepturi error est tempore dolores At expedita voluptas eos ipsum
                ducimus. A dicta neque est facere quisquam eos voluptatibus culpa. 33 voluptatibus omnis quo delectus
                illo id architecto nesciunt eos provident itaque. Qui sunt provident et perspiciatis minima ut velit
                saepe qui quidem excepturi. At reiciendis facilis sit esse libero cum doloremque animi aut quia officiis
                sit omnis optio qui voluptatibus amet. Qui consequatur molestiae ab internos deleniti sed explicabo
                voluptatem ut laboriosam galisum. Nam facilis dolorum et dolorum cupiditate aut omnis quasi est expedita
                laborum ea saepe deserunt.
              </p>
            </div>
          </main>
        </>
      )}
    </>
  );
};

export default LoremPages;
