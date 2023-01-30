import Data from '../Data.json';
import "../style/footer.css"
import '../style/toggle.css';
const Footer = () => {
    return (
        <footer className='footer'>
            <nav className='footer-container-1'>

                <ul>
                    <h3>Contribute</h3>
                    {
                        Data.footer.Contribute.map((item, index) => {
                            return <li><a href="https://web.dev/" alt="website link">{item}</a></li>
                        })
                    }
                </ul>

                <ul>
                    <h3>Related Content</h3>
                    {
                        Data.footer.RelatedContent.map((item, index) => {
                            return <li><a href="https://web.dev/" alt="website link">{item}</a></li>
                        })
                    }
                </ul>

                <ul>
                    <h3>Connect</h3>
                    {
                        Data.footer.Connect.map((item, index) => {
                            return <li><a href="https://web.dev/" alt="website link">{item}</a></li>
                        })
                    }
                </ul>

            </nav>

            <nav className='footer-container-2'>
                <ul>
                    <li id="google-image">
                        <a href="https://developers.google.com/" >
                            <img src={require("../image/google_developer_image.png")} alt="Wait for google img" />
                        </a>
                    </li>
                    {
                        Data.footer.google.map((item, index) => {
                            return <li>
                                <a href='https://developer.chrome.com/'>{item}</a>
                            </li>
                        })
                    }
                </ul>
                <div className='selection-menu'>
                    <div className='toggle'>
                    <span>Dark theme</span>
                        <label className="switch">
                            <input type="checkbox" />
                            <span className="slider round"></span>
                        </label>
                    </div>
                    <div className='select-language'>
                        <select>
                            <option>English</option>
                            <option>Hindi</option>
                        </select>
                    </div>
                </div>
            </nav>

            <nav className='footer-container-3'>
                <ul>
                    <li>
                        <a href='https://developer.chrome.com/'>Terms & Privacy</a>
                    </li>
                    <li>
                        <a href='https://developer.chrome.com/'>Community Guidelines</a>
                    </li>
                </ul>

            </nav>

            <p>
                Except as otherwise noted, the content of this page is licensed under the <a
                    href='https://creativecommons.org/licenses/by/4.0/'>
                    Creative Commons Attribution 4.0 License,
                </a> and code samples are licensed under the <a
                    href='https://www.apache.org/licenses/LICENSE-2.0'>
                    Apache 2.0 License.
                </a> For details, see the <a
                    href='https://developers.google.com/terms/site-policies'>Google Developers Site Policies.
                </a>
            </p>
        </footer>
    )
};

export default Footer;