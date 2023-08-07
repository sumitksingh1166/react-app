import React from 'react'

const Signuppage = () => {
    return (
        <>
            <meta charSet="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>Sign up</title>
            {/* use for styling */}
            <style
                dangerouslySetInnerHTML={{
                    __html:
                        "\n        *flex{\n            \n            font-family: 'Courier New', Courier, monospace;\n        }\n        .mypage{\n            height: 100%;\n            width: 25%;\n            border-radius: 10px;\n            /* background-color: seashell; */\n            box-shadow: 2px 3px 5px 2px;\n            padding: 50px;\n            backdrop-filter: #eee;\n        }\n        body{\n            justify-content: right;\n            background-color: bisque;\n            display: flex;\n            margin: 5%;\n            align-items: center;\n            background-image: url(https://wallpaperaccess.com/full/2497911.jpg);\n            backdrop-filter: blur(5px);\n        }\n\n        .myinput{\n            display: block;\n\n            width: 90%;\n            box-sizing: border-box;\n            margin-bottom: 20px;\n            padding: 10px 10px;\n            border-radius: 5px;\n            border: none;\n            border-bottom: 2px solid black;\n            font-size: medium;\n            border-radius: 20px;\n            background-color: #eee;\n            border: none;\n\n        }   \n        \n        .mybtn{\n            width: 85%;\n            padding: 10px 10px;\n            margin-top: 20px;\n            margin-bottom: 30px;\n            margin-left: 20px;\n            border: none;\n            border-radius: 5px;\n            transition-property: all;\n            transition-duration: 300ms;\n            color: white;\n            background-color: skyblue;\n        }\n        .mybtn:hover{\n            transform: scale(1.1) translateY(5px);\n            box-shadow: 0px -10px 10px -5px;\n        }\n        form{\n            margin-top: 50px;\n        }\n        .media{\n            font-size: 40px;\n            font-weight: bold;\n            letter-spacing: 4px;\n            text-align: center;\n        }\n\n        \n    "
                }}
            />
            <div className="mypage">
                <h2 style={{ textAlign: "center" }}>One Click to go</h2>
                <p className="media">Thread</p>
                <form>
                    <label htmlFor="name" type="text">
                        First Name
                    </label>
                    <input className="myinput" type="text" />
                    <br />
                    <label htmlFor="name" type="text">
                        {" "}
                        Last Name
                    </label>
                    <input className="myinput" type="text" />
                    <br />
                    <label htmlFor="Email" type="text">
                        Email
                    </label>
                    <input className="myinput" type="text" />
                    <br />
                    <label htmlFor="password" type="text">
                        Creating password
                    </label>
                    <input className="myinput" type="text" />
                    <br />
                    <label htmlFor="confirm password" type="text">
                        Confirm password
                    </label>
                    <input className="myinput" type="text" />
                    <br />
                    <input type="checkbox" />
                    <label htmlFor="text">
                        I accept the <u>Terms of Services</u> and privacy policy
                    </label>
                    <br />
                    <br />
                    <button className="mybtn">Sign Up</button>
                    <p style={{ textAlign: "center" }}>
                        Already registerd?
                        <u>
                            <a
                                style={{ color: "azure" }}
                                href="https://www.bing.com/search?q=amazon&form=ANNNB1&refig=dc002f15db4b4e2fbe920dde300276a8&sp=1&lq=0&filters=ufn%3A%22Amazon+%28company%29%22+sid%3A%22ce00286a-e903-ff2c-7dac-b49bd707399c%22&asbe=HS&qs=MB&pq=amazo&sc=10-5&cvid=dc002f15db4b4e2fbe920dde300276a8"
                            >
                                Sign in{" "}
                            </a>{" "}
                        </u>
                    </p>
                </form>
            </div>
        </>

    )
}

export default Signuppage