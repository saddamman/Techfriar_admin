import React from "react";

import peopleOne from "../../assets/people-img.png";

// const data = [
//   {
//     name: "a",
//     image: "",
//     profile: "",
//     child: [
//       {
//         name: "a1",
//         image: "",
//         profile: "",
//         child: [
//           {
//             name: "a1_1",
//             image: "",
//             profile: "",
//           },
//           {
//             name: "a1_2",
//             image: "",
//             profile: "",
//           },
//         ],
//       },
//       {
//         name: "a2",
//         image: "",
//         profile: "",
//         child: [
//           {
//             name: "a2_1",
//             image: "",
//             profile: "",
//           },
//           {
//             name: "a2_2",
//             image: "",
//             profile: "",
//           },
//         ],
//       },
//       {
//         name: "a3",
//         image: "",
//         profile: "",
//         child: [
//           {
//             name: "a3_1",
//             image: "",
//             profile: "",
//           },
//           {
//             name: "a3_2",
//             image: "",
//             profile: "",
//           },
//         ],
//       },
//     ],
//   },
// ];
const PeopleList = () => {
  //   const getData = (data) => {
  //     for (let i = 0; i < data.length; i++) {
  //       // debugger;
  //       console.log(data[i].name);
  //       if (data[i].child) {
  //         getData(data[i].child);
  //       }
  //     }
  //   };

  // getData(data);
  return (
    <div className="peopleList">
      <div className="people__row">
        <div className="people__item">
          <div className="people__cardBx hasChild">
            <div className="people__card">
              <button className="people__viewmore">
                <span></span>
                <span></span>
                <span></span>
                <div className="people__viewmore"></div>
              </button>
              <div className="people__thumbnail">
                <img src={peopleOne} alt="" />
              </div>
              <div className="people__card__content">
                <h2 className="people__name">Seth Williams</h2>
                <h4 className="people__designation">Managing director</h4>
              </div>

              <div className="people__btnGroup">
                <button className="people__addBtn">
                  <span>+</span>
                </button>
              </div>
            </div>
          </div>

          <div className="people__row line">
            <div className="people__item">
              <button className="country-btn">
                <img src="../assets/images/brazil-flag.svg" alt="Brazil" />
                <span>Brazil</span>
              </button>
              <div className="people__cardBx hasChild">
                <div className="people__card">
                  <button className="people__viewmore">
                    <span></span>
                    <span></span>
                    <span></span>
                    <div className="people__viewmore"></div>
                  </button>
                  <div className="people__thumbnail">
                    <img src={peopleOne} alt="" />
                  </div>
                  <div className="people__card__content">
                    <h2 className="people__name">Ramon Harris</h2>
                    <h4 className="people__designation">Regional Director</h4>
                  </div>

                  <div className="people__btnGroup">
                    <button className="people__addBtn">
                      <span>+</span>
                    </button>
                  </div>
                </div>
              </div>
              <div className="people__row line">
                <div className="people__item">
                  <div className="people__cardBx ">
                    <div className="people__card">
                      <button className="people__viewmore">
                        <span></span>
                        <span></span>
                        <span></span>
                        <div className="people__viewmore"></div>
                      </button>
                      <div className="people__thumbnail">
                        <img src={peopleOne} alt="" />
                      </div>
                      <div className="people__card__content">
                        <h2 className="people__name">Janet Parks</h2>
                        <h4 className="people__designation">CEO</h4>
                      </div>

                      <div className="people__btnGroup">
                        <button className="people__addBtn">
                          <span>+</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="people__item">
                  <div className="people__cardBx">
                    <div className="people__card">
                      <button className="people__viewmore">
                        <span></span>
                        <span></span>
                        <span></span>
                        <div className="people__viewmore"></div>
                      </button>
                      <div className="people__thumbnail">
                        <img src={peopleOne} alt="" />
                      </div>
                      <div className="people__card__content">
                        <h2 className="people__name">Isabelle Kaif</h2>
                        <h4 className="people__designation">CFO</h4>
                      </div>

                      <div className="people__btnGroup">
                        <button className="people__addBtn">
                          <span>+</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="people__item">
              <button className="country-btn">
                <img src="../assets/images/usa-flag.svg" alt="USA" />
                <span>USA</span>
              </button>
              <div className="people__cardBx hasChild">
                <div className="people__card">
                  <button className="people__viewmore">
                    <span></span>
                    <span></span>
                    <span></span>
                    <div className="people__viewmore"></div>
                  </button>
                  <div className="people__thumbnail">
                    <img src={peopleOne} alt="" />
                  </div>
                  <div className="people__card__content">
                    <h2 className="people__name">Dan Morgan</h2>
                    <h4 className="people__designation">Regional Director</h4>
                  </div>

                  <div className="people__btnGroup">
                    <button className="people__addBtn">
                      <span>+</span>
                    </button>
                  </div>
                </div>
              </div>
              <div className="people__row line">
                <div className="people__item">
                  <div className="people__cardBx hasChild">
                    <div className="people__card">
                      <button className="people__viewmore">
                        <span></span>
                        <span></span>
                        <span></span>
                        <div className="people__viewmore"></div>
                      </button>
                      <div className="people__thumbnail">
                        <img src={peopleOne} alt="" />
                      </div>
                      <div className="people__card__content">
                        <h2 className="people__name">Ivan Toney</h2>
                        <h4 className="people__designation">CEO</h4>
                      </div>

                      <div className="people__btnGroup">
                        <button className="people__addBtn">
                          <span>+</span>
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="people__row line">
                    <div className="people__item">
                      <div className="people__cardBx ">
                        <div className="people__card">
                          <button className="people__viewmore">
                            <span></span>
                            <span></span>
                            <span></span>
                            <div className="people__viewmore"></div>
                          </button>
                          <div className="people__thumbnail">
                            <img src={peopleOne} alt="" />
                          </div>
                          <div className="people__card__content">
                            <h2 className="people__name">Sabrina Francis</h2>
                            <h4 className="people__designation">CFO</h4>
                          </div>
                          <button className="people__retailBtn">
                            <img src="../assets/images/cart-icon.svg" alt="USA" />
                            <span>Retial</span>
                          </button>
                          <div className="people__btnGroup">
                            <button className="people__more">
                              <span>2</span>
                              <img src="../assets/images/angle-down.svg" alt="USA" />
                            </button>
                            <button className="people__addBtn">
                              <span>+</span>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="people__item">
                      <div className="people__cardBx">
                        <div className="people__card">
                          <button className="people__viewmore">
                            <span></span>
                            <span></span>
                            <span></span>
                            <div className="people__viewmore"></div>
                          </button>
                          <div className="people__thumbnail">
                            <img src={peopleOne} alt="" />
                          </div>
                          <div className="people__card__content">
                            <h2 className="people__name">Brian Walker</h2>
                            <h4 className="people__designation">Managing director</h4>
                          </div>

                          <div className="people__btnGroup">
                            <button className="people__addBtn">
                              <span>+</span>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="people__item">
                  <div className="people__cardBx">
                    <div className="people__card">
                      <button className="people__viewmore">
                        <span></span>
                        <span></span>
                        <span></span>
                        <div className="people__viewmore"></div>
                      </button>
                      <div className="people__thumbnail">
                        <img src={peopleOne} alt="" />
                      </div>
                      <div className="people__card__content">
                        <h2 className="people__name"> Vera Martinez</h2>
                        <h4 className="people__designation">Managing director</h4>
                      </div>

                      <div className="people__btnGroup">
                        <button className="people__addBtn">
                          <span>+</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="people__item">
              <button className="country-btn">
                <img src="../assets/images/italy-flag.svg" alt="Itly" />
                <span>Italy</span>
              </button>
              <div className="people__cardBx hasChild">
                <div className="people__card">
                  <button className="people__viewmore">
                    <span></span>
                    <span></span>
                    <span></span>
                    <div className="people__viewmore"></div>
                  </button>
                  <div className="people__thumbnail">
                    <img src={peopleOne} alt="" />
                  </div>
                  <div className="people__card__content">
                    <h2 className="people__name">Miles Clark</h2>
                    <h4 className="people__designation">Chief Administrator</h4>
                  </div>

                  <div className="people__btnGroup">
                    <button className="people__addBtn">
                      <span>+</span>
                    </button>
                  </div>
                </div>
              </div>
              <div className="people__row line">
                <div className="people__item">
                  <div className="people__cardBx">
                    <div className="people__card">
                      <button className="people__viewmore">
                        <span></span>
                        <span></span>
                        <span></span>
                        <div className="people__viewmore"></div>
                      </button>
                      <div className="people__thumbnail">
                        <img src={peopleOne} alt="" />
                      </div>
                      <div className="people__card__content">
                        <h2 className="people__name">Angela How</h2>
                        <h4 className="people__designation">Chief Adminis</h4>
                      </div>

                      <div className="people__btnGroup">
                        <button className="people__addBtn">
                          <span>+</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="people__item">
                  <div className="people__cardBx">
                    <div className="people__card">
                      <button className="people__viewmore">
                        <span></span>
                        <span></span>
                        <span></span>
                        <div className="people__viewmore"></div>
                      </button>
                      <div className="people__thumbnail">
                        <img src={peopleOne} alt="" />
                      </div>
                      <div className="people__card__content">
                        <h2 className="people__name">Seth Williams</h2>
                        <h4 className="people__designation">Managing director</h4>
                      </div>

                      <div className="people__btnGroup">
                        <button className="people__addBtn">
                          <span>+</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PeopleList;
