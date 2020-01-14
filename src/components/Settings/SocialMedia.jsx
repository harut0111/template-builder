import React, { useEffect } from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
import { SOCIAL_MEDIA_LIST, getActiveEl } from "../Constants";
import { useStateValue } from "../../context";
import { UPDATE_ELEMENT } from "../../context/actions";

const SocialMedia = i => {
  const [{ layout }, dispatch] = useStateValue();

  // const socialMediaRef = useRef(null);
  // const [socialMediaRef, setSocialMediaRef] = useState(null);
  // const [urlRef, setUrlRef] = useState(null);

  let socialMediaRef = [];
  let urlRef = [];

  const SMD = getActiveEl(layout).elData;
  // console.log('test', test);

  const handleOnAdd = () => {
    // const socialMedia = socialMediaRef.value;
    // const url = urlRef.value;

    const elements = [...layout.elements];
    elements.forEach((element, i) => {
      if (element.elId === layout.activeEl.id) {
        if (SMD) {
          elements[i].elData = [...SMD, { socialMedia: "Facebook", url: "" }];
        }
        // else {
        //   elements[i].elData = [{ socialMedia, url }];
        // }
      }
    });
    dispatch({ type: UPDATE_ELEMENT, payload: elements });
  };

  useEffect(() => {
    if (!SMD) {
      const elements = [...layout.elements];

      elements.forEach((element, i) => {
        if (element.elId === layout.activeEl.id) {
          elements[i].elData = [{ socialMedia: "Facebook", url: "" }];
        }
      });
      dispatch({ type: UPDATE_ELEMENT, payload: elements });
    }
    //eslint-disable-next-line
  }, []);

  const handleOnRemove = index => {
    if (SMD.length > 1) {
      const elements = [...layout.elements];
      elements.forEach((element, i) => {
        if (element.elId === layout.activeEl.id) {
          const filteredEls = [...element.elData];
          filteredEls.splice(index, 1);
          elements[i].elData = filteredEls;
        }
      });

      dispatch({ type: UPDATE_ELEMENT, payload: elements });
    }
  };

  const handleOnChange = (ev, index) => {
    ev.preventDefault();

    const socialMedia = socialMediaRef[index].value;
    const url = urlRef[index].value;

    const elements = [...layout.elements];
    elements.forEach((element, i) => {
      if (element.elId === layout.activeEl.id) {
        const CSMD = [...SMD];
        CSMD[index] = { socialMedia, url };
        elements[i].elData = CSMD;
      }
    });
    dispatch({ type: UPDATE_ELEMENT, payload: elements });
  };

  const socialMediaIcons = [
    <FaFacebook />,
    <FaTwitter />,
    <FaInstagram />,
    <FaYoutube />
  ];

  // const setUrlInputRef = element => {
  //   urlRef.push(element);
  // };

  // const setSocialMediaOptonRef = element => {
  //   socialMediaRef.push(element);
  // };

  return (
    <div className="socialMedia">
      <h3>Social Media</h3>
      {/* {console.log(SMD)} */}
      {SMD
        ? SMD.map((el, i) => (
            <div className="socialMedia-main" key={i} id={i}>
              <form onSubmit={e => e.preventDefault()}>
                {/* {console.log("el.socialMedia", el.socialMedia)}
                {console.log("el.url", el.url)} */}
                <select
                  value={el.socialMedia}
                  ref={el => socialMediaRef.push(el)}
                  onChange={ev => handleOnChange(ev, i)}
                >
                  {SOCIAL_MEDIA_LIST.map((item, i) => (
                    <option key={i} value={item}>
                      {item}
                    </option>
                  ))}
                </select>
                <input
                  id={`inp-${i}`}
                  placeholder="URL"
                  ref={el => urlRef.push(el)}
                  onChange={ev => handleOnChange(ev, i)}
                  value={el.url}
                />
                <hr />
                {console.log("i", i)}
                <input
                  type="button"
                  value="Delete"
                  onClick={() => handleOnRemove(i)}
                />
              </form>
              <hr />
            </div>
          ))
        : null}

      <button onClick={handleOnAdd}>Add another service</button>
    </div>
  );
};
export default SocialMedia;
