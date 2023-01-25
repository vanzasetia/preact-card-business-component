import "./index.css";
import Attribution from "./components/attribution";
import Button from "./components/button";
import Info from "./components/info";

const App = () => (
  <div id="app">
    <main class="card">
      <img
        src="/assets/laura-smith.jpg"
        alt="Laura Smith"
        class="card__profile"
        width="400"
        height="500"
      />
      <div class="card__container">
        <div class="text-align:center">
          <h1>Laura Smith</h1>
          <p class="card__job margin-top:0">Frontend Developer</p>
          <a href="/" class="card__website">
            laurasmith.website
          </a>
        </div>
        <div class="card__contact">
          <Button url="/" backgroundColor="white">
            <svg
              class="card__icon"
              width="28"
              height="28"
              viewBox="0 0 28 28"
              aria-hidden="true"
              focusable="false"
            >
              <path d="M28 11.094V23.5c0 1.375-1.125 2.5-2.5 2.5h-23A2.507 2.507 0 0 1 0 23.5V11.094c.469.516 1 .969 1.578 1.359 2.594 1.766 5.219 3.531 7.766 5.391 1.313.969 2.938 2.156 4.641 2.156h.031c1.703 0 3.328-1.188 4.641-2.156 2.547-1.844 5.172-3.625 7.781-5.391a9.278 9.278 0 0 0 1.563-1.359zM28 6.5c0 1.75-1.297 3.328-2.672 4.281-2.438 1.687-4.891 3.375-7.313 5.078-1.016.703-2.734 2.141-4 2.141h-.031c-1.266 0-2.984-1.437-4-2.141-2.422-1.703-4.875-3.391-7.297-5.078-1.109-.75-2.688-2.516-2.688-3.938 0-1.531.828-2.844 2.5-2.844h23c1.359 0 2.5 1.125 2.5 2.5z" />
            </svg>
            Email
          </Button>
          <Button url="/" backgroundColor="blue">
            <svg
              class="card__icon"
              width="24"
              height="28"
              viewBox="0 0 24 28"
              aria-hidden="true"
              focusable="false"
            >
              <path d="M3.703 22.094h3.609V11.25H3.703v10.844zM7.547 7.906c-.016-1.062-.781-1.875-2.016-1.875s-2.047.812-2.047 1.875c0 1.031.781 1.875 2 1.875H5.5c1.266 0 2.047-.844 2.047-1.875zm9.141 14.188h3.609v-6.219c0-3.328-1.781-4.875-4.156-4.875-1.937 0-2.797 1.078-3.266 1.828h.031V11.25H9.297s.047 1.016 0 10.844h3.609v-6.062c0-.313.016-.641.109-.875.266-.641.859-1.313 1.859-1.313 1.297 0 1.813.984 1.813 2.453v5.797zM24 6.5v15c0 2.484-2.016 4.5-4.5 4.5h-15A4.502 4.502 0 0 1 0 21.5v-15C0 4.016 2.016 2 4.5 2h15C21.984 2 24 4.016 24 6.5z" />
            </svg>
            LinkedIn
          </Button>
        </div>
        <div class="card__text">
          <Info
            title="About"
            description="I am a frontend developer with a particular interest in making
            things simple and automating daily tasks. I try to keep up with
            security and best practices. I am always looking for new things to
            learn."
          />
          <Info
            title="Interests"
            description="Food expert. Music scholar. Reader. Internet fanatic. Bacon buff.
            Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic."
          />
        </div>
      </div>
      <div class="card__social-media">
        <a href="/" aria-label="Twitter">
          <svg
            class="card__social-icon"
            width="24"
            height="28"
            viewBox="0 0 24 28"
            aria-hidden="true"
            focusable="false"
          >
            <path d="M20 9.531a6.887 6.887 0 0 1-1.891.531 3.313 3.313 0 0 0 1.453-1.828 6.547 6.547 0 0 1-2.094.797A3.253 3.253 0 0 0 15.077 8a3.28 3.28 0 0 0-3.281 3.281c0 .25.016.516.078.75a9.324 9.324 0 0 1-6.781-3.437 3.33 3.33 0 0 0-.453 1.656c0 1.141.531 2.141 1.422 2.734-.547-.016-1.062-.172-1.563-.406v.031c0 1.594 1.203 2.922 2.703 3.219-.281.078-.5.125-.797.125-.203 0-.406-.031-.609-.063a3.3 3.3 0 0 0 3.063 2.281A6.607 6.607 0 0 1 4 19.53a9.351 9.351 0 0 0 5.031 1.469c6.031 0 9.344-5 9.344-9.344 0-.141 0-.281-.016-.422A6.31 6.31 0 0 0 20 9.53zM24 6.5v15c0 2.484-2.016 4.5-4.5 4.5h-15A4.502 4.502 0 0 1 0 21.5v-15C0 4.016 2.016 2 4.5 2h15C21.984 2 24 4.016 24 6.5z" />
          </svg>
        </a>
        <a href="/" aria-label="Facebook">
          <svg
            class="card__social-icon"
            width="24"
            height="28"
            viewBox="0 0 24 28"
            aria-hidden="true"
            focusable="false"
          >
            <path d="M19.5 2C21.984 2 24 4.016 24 6.5v15c0 2.484-2.016 4.5-4.5 4.5h-2.938v-9.297h3.109l.469-3.625h-3.578v-2.312c0-1.047.281-1.75 1.797-1.75L20.265 9V5.766c-.328-.047-1.469-.141-2.781-.141-2.766 0-4.672 1.687-4.672 4.781v2.672H9.687v3.625h3.125V26H4.499a4.502 4.502 0 0 1-4.5-4.5v-15c0-2.484 2.016-4.5 4.5-4.5h15z" />
          </svg>
        </a>
        <a href="/" aria-label="Instagram">
          <svg
            class="card__social-icon"
            width="24"
            height="28"
            viewBox="0 0 24 28"
            aria-hidden="true"
            focusable="false"
          >
            <path d="M16 14c0-2.203-1.797-4-4-4s-4 1.797-4 4 1.797 4 4 4 4-1.797 4-4zm2.156 0c0 3.406-2.75 6.156-6.156 6.156S5.844 17.406 5.844 14 8.594 7.844 12 7.844s6.156 2.75 6.156 6.156zm1.688-6.406c0 .797-.641 1.437-1.437 1.437S16.97 8.39 16.97 7.594s.641-1.437 1.437-1.437 1.437.641 1.437 1.437zM12 4.156c-1.75 0-5.5-.141-7.078.484-.547.219-.953.484-1.375.906s-.688.828-.906 1.375c-.625 1.578-.484 5.328-.484 7.078s-.141 5.5.484 7.078c.219.547.484.953.906 1.375s.828.688 1.375.906c1.578.625 5.328.484 7.078.484s5.5.141 7.078-.484c.547-.219.953-.484 1.375-.906s.688-.828.906-1.375c.625-1.578.484-5.328.484-7.078s.141-5.5-.484-7.078c-.219-.547-.484-.953-.906-1.375s-.828-.688-1.375-.906C17.5 4.015 13.75 4.156 12 4.156zM24 14c0 1.656.016 3.297-.078 4.953-.094 1.922-.531 3.625-1.937 5.031s-3.109 1.844-5.031 1.937c-1.656.094-3.297.078-4.953.078s-3.297.016-4.953-.078c-1.922-.094-3.625-.531-5.031-1.937S.173 20.875.08 18.953C-.014 17.297.002 15.656.002 14s-.016-3.297.078-4.953c.094-1.922.531-3.625 1.937-5.031s3.109-1.844 5.031-1.937c1.656-.094 3.297-.078 4.953-.078s3.297-.016 4.953.078c1.922.094 3.625.531 5.031 1.937s1.844 3.109 1.937 5.031C24.016 10.703 24 12.344 24 14z" />
          </svg>
        </a>
        <a href="/" aria-label="GitHub">
          <svg
            class="card__social-icon"
            width="24"
            height="28"
            viewBox="0 0 24 28"
            aria-hidden="true"
            focusable="false"
          >
            <path d="M8.109 18.75c.031-.047.016-.141-.047-.203-.078-.063-.172-.078-.219-.031-.031.047-.016.141.047.203.078.063.172.078.219.031zm-.437-.641c-.047-.063-.125-.094-.187-.063-.047.031-.047.125 0 .187.063.078.141.109.187.078.047-.031.047-.125 0-.203zm-.641-.625c.016-.031-.016-.094-.078-.125-.047-.016-.109-.016-.125.031-.031.047 0 .094.063.125.063.016.125.016.141-.031zm.328.36c.031-.031.031-.109-.031-.156-.047-.063-.125-.078-.156-.047-.047.047-.031.109.016.172.047.047.125.078.172.031zm1.344 1.172c.016-.063-.047-.141-.141-.172s-.172 0-.203.063c-.016.063.047.141.141.172s.172 0 .203-.063zm.656.047c0-.063-.078-.125-.187-.125-.094 0-.156.063-.156.125s.078.125.172.125.172-.063.172-.125zm.61-.11c-.016-.063-.109-.094-.203-.078s-.156.078-.141.141.094.109.187.094.156-.094.156-.156zM20 14c0-4.422-3.578-8-8-8s-8 3.578-8 8c0 3.531 2.297 6.531 5.469 7.594.406.078.547-.172.547-.391 0-.187 0-.812-.016-1.484 0 0-2.219.484-2.688-.953 0 0-.359-.922-.891-1.156 0 0-.719-.5.063-.5 0 0 .781.063 1.219.828.703 1.234 1.875.875 2.328.672.078-.516.281-.875.516-1.078-1.781-.203-3.656-.891-3.656-3.953 0-.875.313-1.578.828-2.141-.078-.203-.359-1.016.078-2.125.672-.203 2.203.828 2.203.828.641-.187 1.313-.266 2-.266s1.359.078 2 .266c0 0 1.531-1.031 2.203-.828.438 1.109.156 1.922.078 2.125.516.562.828 1.266.828 2.141 0 3.078-1.875 3.75-3.656 3.953.281.25.547.734.547 1.484 0 1.062-.016 1.922-.016 2.188 0 .219.141.469.547.391C17.703 20.533 20 17.533 20 14.001zm4-7.5v15c0 2.484-2.016 4.5-4.5 4.5h-15A4.502 4.502 0 0 1 0 21.5v-15C0 4.016 2.016 2 4.5 2h15C21.984 2 24 4.016 24 6.5z" />
          </svg>
        </a>
      </div>
    </main>
    <Attribution />
  </div>
);

export default App;