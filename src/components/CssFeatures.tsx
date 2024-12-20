import style1 from "./style_one.module.css"

const CssFeatures = () => {
    return (
        <>
            <div className={`${style1.container} ${style1.wrapper}`}>
                <div id="top">
                    <h1>Welcome to My Homepage</h1>
                    <p>Use the menu to select different Stylesheets</p>
                </div>
                <div className="wrapper">
                    <div id="menubar">
                        <ul id="menulist">
                            <li className="menuitem">Stylesheet 1</li>
                            <li className="menuitem">Stylesheet 2</li>
                            <li className="menuitem">Stylesheet 3</li>
                            <li className="menuitem">Stylesheet 4</li>
                            <li className="menuitem">No Stylesheet</li>
                        </ul>
                    </div>
                    <div id="main">
                        <h1>Same Page Different Stylesheets</h1>
                        <p>
                            This is a demonstration of how different stylesheets
                            can change the layout of your HTML page. You can
                            change the layout of this page by selecting
                            different stylesheets in the menu, or by selecting
                            one of the following links:
                            <br />
                            <a href="#">Stylesheet1</a>,
                            <a href="#">Stylesheet2</a>,
                            <a href="#">Stylesheet3</a>,
                            <a href="#">Stylesheet4</a>.
                        </p>
                        <h2>No Styles</h2>
                        <p>
                            This page uses DIV elements to group different
                            sections of the HTML page. Click here to see how the
                            page looks like with no stylesheet:
                            <br />
                            <a href="#">No Stylesheet</a>.
                        </p>
                    </div>
                    <div id="sidebar">
                        <h3>Side-Bar</h3>
                        <p>
                            Lorem ipsum dolor sit amet, consectetuer adipiscing
                            elit, sed diam nonummy nibh euismod tincidunt ut
                            laoreet dolore magna aliquam erat volutpat.
                        </p>
                    </div>
                </div>

                {/* <div id="bottom">
    Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.
  </div> */}
            </div>
        </>
    )
}

export default CssFeatures
