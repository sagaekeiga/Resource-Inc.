import './App.css';

function App() {
  return (
    <div id='wrapper'>
      <div id='sidebar'>
        <div id='sidebarWrap'>
          <h1>
            Resource, Inc
          </h1>
          <nav id='mainnav'>
            <p id='menuWrap'>
              <a id='menu'>
                <span id='menuBtn'></span>
              </a>
            </p>
            <div className='panel'>
              <ul>
                <li>
                  <a>TOP</a>
                </li>
                <li>
                  <a>社名</a>
                </li>
                <li>
                  <a>代表者</a>
                </li>
                <li>
                  <a>事業内容</a>
                </li>
                <li>
                  <a>設立</a>
                </li>
                <li>
                  <a>所在地</a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
      <div id='content'>
        <section id='sec01'>
          <header>
            <h2>
              <span>社名</span>
            </h2>
          </header>
          <div className='innerS'>
            Resource株式会社
          </div>
        </section>
        <section id='sec09'>
          <header>
            <h2>
              <span>代表者</span>
            </h2>
          </header>
          <div className='innerS'>
            寒河江京我
          </div>
        </section>
        <section id='sec03'>
          <header>
            <h2>
              <span>事業内容</span>
            </h2>
          </header>
          <div className='innerS'>
            インターネットビジネスの企画・開発・運営
          </div>
        </section>
        <section id='sec04'>
          <header>
            <h2>
              <span>設立</span>
            </h2>
          </header>
          <div className='innerS'>
            2018年12月
          </div>
        </section>
        <section id='sec05'>
          <header>
            <h2>
              <span>所在地</span>
            </h2>
          </header>
          <div className='inner'>
            <ul>
              <li>
                <p>〒176-0013<br />東京都練馬区豊玉中3丁目23-12 ガーラ練馬グランドステージ 402</p>
                <p>TEL 080-7011-9732</p>
                <p>e-Mail sagae@resource-inc.com</p>
              </li>
              <li>
                <div id='map'>
                  <iframe>/ // COMPANY</iframe>
                </div>
              </li>
            </ul>
          </div>
        </section>
          <footer id='footer'>
            Copyright(c) 2019 Resource Inc. All Rights Reserved
        </footer>
      </div>
    </div>
  );
}

export default App;
