import logo from './logo.svg';
import './App.css';

function App() {

  return (
   <div className="Parentbox">
    <div className="Foto">
      <img src="gambar1.webp"/>
    </div>
    <div className="Deskripsi">
      <p className="judul"id="judul">The best wireless Earbuds  </p>
      <p className="Title"><b>NOVEMBER RELEASE </b></p>
      <p className="Price">Number:<a id="nomer">#897879</a></p>
      <p className="Info">
      Lorem Ipsum is simply dummy text of the printing and typesetting indus-try. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
      </p>
      <p><b>SIZE</b></p>
      <tabel>
        <tr id="i">
          <th><button id="button">XS</button></th>&nbsp;
          <th><button id="button">S</button></th>&nbsp;
          <th><button id="button">M</button></th>&nbsp;
          <th><button id="button">L</button></th>&nbsp;
        </tr>
      </tabel><br></br><br></br><br></br>
      <tabel>
        <tr >
          <th><button id="o"><p id="v">BUY NOW</p></button></th>&nbsp;&nbsp;&nbsp;
          <th><button id="u">ADD TO WISHLIST</button></th>
        </tr>
      </tabel>
      <p id="z">'only 1Available</p>
    </div>

    <div className="Parentbox1">
    <div className="Foto1">
      <img src="gambar1.webp"/>
    </div>
    <div className="Deskripsi1">
      <p className="judul" id="j">HEADPHONES</p>
      <p className="Title"id="name">Beats EP</p>
      <p className="Info">
     Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
      </p>
      <hr></hr>
      <p>color</p>
       <tabel>
        <tr>
        &nbsp;&nbsp;<th><button id="w">✓</button></th>&nbsp;&nbsp;
          <th><button id="e">✓</button></th>&nbsp;&nbsp;
          <th><button id="q">✓</button></th>&nbsp;&nbsp;
        </tr>
       </tabel><br></br>
       <p>Cable Configuration</p>
      <tabel>
        <tr id="i">
        &nbsp;<th><button id="button3">Straight</button></th>&nbsp;&nbsp;
          <th><button id="button3">Coiled</button></th>&nbsp;&nbsp;
          <th><button id="button23">Long-Coiled</button></th>&nbsp;
        </tr>
      </tabel><br></br>
      
<p id="j"><svg xmlns="http://www.w3.org/2000/svg" fill="none" id="svg"viewBox="0 0 24 24" stroke-width="1" stroke="currentColor" >
  <path stroke-linecap="round" stroke-linejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" />
</svg>How to configurate your headphones</p>
      <hr></hr>
          <th ><a id="n">148$ </a><button id="b"><p id="v">Add to cart</p></button></th>
    </div>
   </div>
   </div>
  );
}
export default App;
