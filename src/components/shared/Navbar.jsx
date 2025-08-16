import logo from "../../assets/images/LWSBlog.svg";

export default function Navbar() {
  return (
    <nav class="py-4 border-b">
      <div class="navbar-container">
        <div class="logo">
          <a href="index.html">
            <img src={logo} alt="search" />
          </a>
        </div>
        {/* <!-- auth buttons , This will nonfunctional, just for nice looking --> */}
        <div class="auth-buttons">
          <button class="btn btn-primary">sign in</button>
          <button class="btn btn-outline">sign up</button>
        </div>
      </div>
    </nav>
  );
}
