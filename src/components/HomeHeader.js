import React from 'react';
import Link from 'next/link';

import menuList from '@/shared/menu-list';
import GithubStats from '@/components/GithubStats';
import HomeSlider from './HomeSlider';

export default function HomeHeader() {
  return (
    <div className="relative overflow-hidden">
      <svg
        className="absolute left-1/2 top-1/2 -ml-[30%] h-[120%] w-auto -translate-x-1/2 -translate-y-1/2 opacity-10 md:-ml-[10%]"
        width="217"
        height="387"
        viewBox="0 0 217 387"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M326.306232,48.7949447 L332.468077,72.6414559 L327.591199,73.9160946 L325.182697,74.5565145 L325.182697,74.5565145 L320.425579,75.8434911 L318.076969,76.4900222 L318.076969,76.4900222 L313.439659,77.7891054 L311.150963,78.441632 L311.150963,78.441632 L306.633506,79.7525907 L302.195975,81.071338 L297.838393,82.3977709 L293.560778,83.7317869 L289.363153,85.073283 L285.245536,86.4221565 L283.216737,87.0993277 L283.216737,87.0993277 L279.219173,88.4590747 C277.899994,88.9135161 276.594158,89.3691443 275.301669,89.8259421 L271.464245,91.1998273 L269.57557,91.8893694 L269.57557,91.8893694 L265.858305,93.2735885 L262.221173,94.6645684 L260.432662,95.3625615 L260.432662,95.3625615 L256.915765,96.7634899 L255.187384,97.4663994 L255.187384,97.4663994 L251.790769,98.8770451 L250.122541,99.5847555 L250.122541,99.5847555 L246.846254,101.004887 C246.306892,101.242095 245.770874,101.479561 245.2382,101.717283 L242.082287,103.146669 C238.966508,104.579093 235.971141,106.02058 233.096279,107.470666 L230.261587,108.923601 C228.864329,109.651485 227.497204,110.381481 226.160225,111.113529 L223.526463,112.580348 L220.973109,114.05254 C219.297681,115.03577 217.67587,116.022513 216.107706,117.012633 L213.795697,118.500329 C200.92235,126.94476 191.925907,135.62821 186.823102,144.466526 C177.182935,161.163786 181.924632,180.487781 203.158968,203.06085 L204.941438,204.9235 C205.548003,205.54683 206.166991,206.172613 206.798445,206.800859 L208.730251,208.693005 C209.386682,209.326193 210.055622,209.961858 210.737115,210.600014 L212.819299,212.521962 C213.879263,213.486684 214.96757,214.457038 216.084366,215.433065 L218.355986,217.3927 C219.125884,218.048442 219.908486,218.706718 220.703837,219.367543 L223.128179,221.357671 L225.629272,223.363162 L228.207377,225.384091 L230.862754,227.420536 L233.595664,229.472574 C288.568688,270.326252 307.879287,310.410268 286.237384,347.895144 C277.953939,362.242491 263.675327,375.556164 243.373041,387.985111 L241.778852,388.951812 C240.440202,389.755909 239.076148,390.556291 237.686685,391.353 L236.007132,392.30729 C234.31538,393.259822 232.587034,394.207088 230.822079,395.149158 L229.044921,396.089499 L229.044921,396.089499 L225.705418,397.813653 C224.578428,398.38643 223.437615,398.95727 222.282976,399.526191 L218.777576,401.227212 C216.412986,402.357408 213.993078,403.47999 211.517828,404.595091 L207.763442,406.262146 C202.702244,408.477447 197.419625,410.663079 191.915385,412.82009 L187.745648,414.432497 L185.629608,415.234706 L185.629608,415.234706 L181.335174,416.831197 L176.957585,418.4172 L172.496823,419.992812 L167.952868,421.558133 C166.424349,422.078202 164.881962,422.596572 163.325702,423.113259 L158.615307,424.658289 L157.026676,425.171073 L157.026676,425.171073 L153.821663,426.193321 L153.821663,426.193321 L148.944751,427.718453 L143.984554,429.233784 L138.941051,430.73941 L133.814225,432.235431 L128.604057,433.721944 L127.28849,434.092098 L127.28849,434.092098 L123.310527,435.199047 L116.758086,411.456892 L121.701344,410.07788 L124.142776,409.38566 L124.142776,409.38566 L128.965235,407.995851 L133.707139,406.598967 L138.368469,405.195105 L140.668913,404.490588 L140.668913,404.490588 L145.209347,403.076443 L149.66916,401.655566 L154.048333,400.228054 L156.207674,399.511841 L156.207674,399.511841 L160.465853,398.074561 L162.564686,397.353519 L162.564686,397.353519 L166.701827,395.906692 L170.758254,394.453623 L174.733947,392.99441 L178.628888,391.52915 L182.443058,390.057943 C183.700984,389.56656 184.945445,389.074202 186.176437,388.580885 L189.829009,387.098075 L191.624985,386.354544 L191.624985,386.354544 L195.156309,384.86329 L197.465605,383.866056 C197.847493,383.699648 198.227884,383.533139 198.606776,383.36653 L201.97637,381.86436 L203.630833,381.111278 L203.630833,381.111278 L206.879079,379.601179 L210.046405,378.085917 L213.13279,376.565589 C215.671048,375.296566 218.124974,374.022368 220.494518,372.743251 L223.297466,371.205966 L226.01939,369.664056 C245.236124,358.597367 258.209156,347.181966 264.907397,335.580271 C274.954648,318.177921 270.435455,298.467549 249.291887,275.737454 L247.516582,273.862412 C247.214444,273.548767 246.909177,273.234552 246.600773,272.919764 L244.712686,271.024159 C243.107855,269.438741 241.424373,267.838929 239.661578,266.224492 L237.508111,264.280134 L236.402746,263.302664 L236.402746,263.302664 L234.134593,261.337083 C232.981344,260.350735 231.799305,259.359041 230.588332,258.36195 L228.127765,256.360559 C227.711227,256.025789 227.291463,255.690417 226.868469,255.354439 L224.291693,253.331298 L221.637126,251.293547 C221.188202,250.9527 220.736025,250.61124 220.280592,250.269166 L218.904515,249.241099 C163.932241,208.387979 144.319803,168.824906 165.493116,132.151653 C177.502996,111.349931 202.617717,93.0388439 240.93875,76.7081189 L244.688467,75.1338912 L246.594252,74.3513819 L246.594252,74.3513819 L250.467688,72.7955081 L254.423628,71.2517418 L256.432544,70.4843668 L256.432544,70.4843668 L260.51228,68.958569 C261.199115,68.7052597 261.88939,68.4524442 262.583105,68.2001204 L266.786682,66.6920598 L271.072845,65.1956956 L275.441616,63.710925 C276.911643,63.2179224 278.395441,62.7268348 279.893013,62.2376453 L284.427058,60.7757536 L286.72508,60.0490462 L286.72508,60.0490462 L291.383136,58.6040439 L293.743174,57.8857234 L293.743174,57.8857234 L298.525285,56.4573792 L300.947363,55.74733 L300.947363,55.74733 L305.853575,54.3354128 L310.842548,52.9343185 L312.523934,52.4696743 L312.523934,52.4696743 L315.914302,51.5439442 L315.914302,51.5439442 L321.068856,50.1641872 L326.306232,48.7949447 Z"
          transform="translate(-116.329 -48.76)"
          fill="#0080FF"
        />
      </svg>

      <div className="mx-auto max-w-[90rem] px-4 pb-16 pt-8 sm:px-6 lg:flex lg:px-8 lg:pt-16 xl:px-10">
        {/* Left */}
        <div className="relative z-10 flex w-full flex-shrink-0 flex-col items-center text-center lg:block lg:max-w-[500px] lg:text-left xl:mr-16">
          <svg
            className="swiper-logo h-32 w-32 flex-shrink-0 rounded-full lg:h-40 lg:w-40"
            alt="Swiper"
            width="129"
            height="129"
            viewBox="0 0 129 129"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M97.5869496,9.51093626 C115.83804,20.7848256 128,40.9721238 128,64 C128,99.346224 99.346224,128 64,128 C56.2920179,128 48.9022945,126.637372 42.0606106,124.137797 L41.3296807,123.865645 L42.5199148,123.48344 L44.0499006,122.981598 L44.8047554,122.729449 L44.8047554,122.729449 L45.5528525,122.476476 L47.0287766,121.968044 L48.477679,121.456268 L49.8995657,120.941118 L51.2944429,120.422561 L51.9817549,120.161995 L53.3361292,119.638268 C54.7663971,119.077773 56.1505947,118.511327 57.4887554,117.938757 L58.4837445,117.508179 L59.7032082,116.966702 C60.2391997,116.725238 60.7672019,116.482694 61.2872173,116.239057 L62.0612505,115.87278 L63.1998411,115.320271 L63.7590314,115.042615 L63.7590314,115.042615 L64.3114862,114.76402 L65.3961918,114.203997 C74.5017145,109.427674 80.6883363,104.239002 83.9729034,98.5499653 C90.9321253,86.4962393 84.8542511,73.6150855 67.4065187,60.4830885 L65.9866432,59.4185495 L65.1241488,58.7570907 L64.2867532,58.1006716 L63.4743719,57.4492672 L62.6869203,56.8028527 L62.3025167,56.4815088 L62.3025167,56.4815088 L61.9243138,56.161403 L61.1864678,55.5248932 L60.6492814,55.0507377 L60.6492814,55.0507377 L60.1259396,54.5793364 L59.4496246,53.9550673 L58.7977741,53.3356509 L58.1703034,52.7210621 L57.865684,52.4155703 L57.865684,52.4155703 L57.5671278,52.1112761 L56.9881629,51.5062679 C50.0910281,44.1742986 48.550875,37.8976624 51.6821025,32.4742173 C53.275799,29.713854 56.0387768,26.999998 59.9662039,24.3569485 L60.4430842,24.040124 L61.1940488,23.5569049 C61.5336196,23.3425039 61.8809347,23.1285905 62.2359916,22.9151777 L62.7743828,22.5954356 L63.603739,22.1172522 L64.4592124,21.6408141 L65.1179529,21.2846511 L65.1179529,21.2846511 L65.7913778,20.9295026 L66.7121153,20.4575739 C67.4124544,20.1043216 68.1348104,19.7526404 68.8791706,19.4025938 L69.6308651,19.0530944 L70.6559388,18.5888147 L71.1782513,18.3574212 L72.2424237,17.8961475 L72.7842819,17.6662758 L73.887538,17.2080833 L74.4489343,16.9797709 L75.5912592,16.5247346 L76.1721862,16.2980192 L77.353565,15.8462143 L78.5609715,15.3966054 L79.174433,15.1726349 L80.4208685,14.7263826 L81.6933149,14.2824097 L82.9917658,13.8407497 L83.6507409,13.6207974 L84.9881859,13.1826691 L86.3516187,12.7469371 L87.7410327,12.3136347 L89.1564212,11.8827954 L90.5977776,11.4544525 L92.4359804,10.9225852 L94.3147346,10.394736 L96.6227494,9.76671243 L97.5869496,9.51093626 Z M64,0 C71.7830114,0 79.2415381,1.38928435 86.1411179,3.93339103 L86.8782091,4.21038217 L86.4108627,4.35186467 L84.1313124,5.0545346 L83.3848908,5.2905768 L81.9121853,5.76541455 L80.4663248,6.24395126 L79.0473024,6.72622031 L77.6551115,7.21225509 L76.2897456,7.70208898 L75.6171199,7.94844102 L73.9648828,8.56854028 L72.3545311,9.19471909 L71.0963985,9.70008321 L70.4773795,9.95425044 L69.2594321,10.4655761 C56.8123589,15.7699668 48.6548341,21.7176 44.7538993,28.4742173 C37.9453585,40.2669559 44.1208291,52.9796592 61.5702618,66.1081375 L62.9900625,67.1727537 L63.8522936,67.8346365 L64.6892575,68.491774 L65.09829,68.8185721 L65.8975078,69.468645 L66.4804703,69.9531308 L66.4804703,69.9531308 L67.0493707,70.4349994 L67.7860906,71.0734406 L68.1451248,71.3909334 L68.8445933,72.0224812 C69.2263095,72.3720718 69.5965761,72.7195512 69.9554568,73.0649416 L70.4852463,73.5814631 L71.248012,74.3504059 L71.9726186,75.1123909 C78.8402712,82.495364 80.3081527,88.8974997 77.0447002,94.5499653 C74.933031,98.2074836 70.9013706,101.807999 64.958951,105.303275 L64.4134675,105.620736 L63.5293583,106.121564 L62.6189315,106.620891 C62.1058295,106.897871 61.5805462,107.174142 61.0430864,107.449677 L60.227765,107.862426 L59.2252746,108.356245 L58.1964941,108.848418 L57.1414295,109.338914 L56.6040425,109.583523 L55.5095633,110.071443 L54.3888152,110.557607 L53.2418044,111.041982 L52.6584524,111.283488 L51.4720589,111.76512 L50.869019,112.005238 L50.869019,112.005238 L50.259418,112.244884 L49.0205357,112.722748 L47.755418,113.19868 L46.4640712,113.672647 L45.1465013,114.144619 L43.8027143,114.614564 L43.1209914,114.848766 L41.7378904,115.315609 L41.0365138,115.548243 L39.6141124,116.011914 L38.1655184,116.47343 L36.3179518,117.047246 L34.4294807,117.617582 L32.8892605,118.071305 L30.739698,118.689489 C12.3072163,107.455464 0,87.1649844 0,64 C0,28.653776 28.653776,0 64,0 Z"
              transform="translate(.335 .835)"
              fill="#0080FF"
            />
          </svg>

          <div className="mt-8 text-5xl font-semibold text-primary md:text-6xl">
            Swiper
          </div>
          <div className="my-2 mt-4 max-w-2xl text-2xl font-medium tracking-tight text-primary sm:text-4xl md:text-4xl md:leading-tight">
            The Most Modern Mobile Touch Slider
          </div>
          <nav className="mt-4 flex flex-wrap justify-center font-medium lg:mt-8 lg:justify-start">
            {menuList.map(({ name, link }) => (
              <Link
                key={link}
                href={link}
                className="mr-4 text-sm text-black hover:!text-primary hover:no-underline dark:text-white"
              >
                {name}
              </Link>
            ))}
          </nav>
          <div className="my-2 text-sm text-black dark:text-white lg:my-4">
            <span className="opacity-50">
              MIT Licensed, v{process.env.swiperReleaseVersion} released on{' '}
              {process.env.swiperReleaseDate}{' '}
            </span>{' '}
            <span> </span>
            <Link
              href="/changelog"
              className="text-black hover:text-primary hover:no-underline dark:text-white dark:hover:text-primary"
            >
              Changelog
            </Link>
          </div>
          <div className="flex justify-center lg:justify-start">
            <GithubStats />
          </div>
        </div>

        {/* Right */}
        <div
          className="home-slider-wrap mt-8 min-w-0 flex-shrink-[10] md:mx-12 lg:mt-0 xl:mx-0"
          style={{
            perspective: '1200px',
            '--swiper-theme-color': '#0080ff',
          }}
        >
          <HomeSlider />
        </div>
      </div>
    </div>
  );
}
