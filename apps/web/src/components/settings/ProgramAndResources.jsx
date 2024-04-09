import ProtoTypes from 'prop-types';

import AddFolders from './AddFolders';
import Files from './Files';
import Folders from './Folders';
import ProjectInfo from './ProjectInfo';
import PRSettings from './PRSettings';

function ProgramAndResources({ name, activeTab }) {
  return (
    <div id="tab3" className={`tab-pane ${name === activeTab && 'active'}`}>
      <div className="grid grid-cols-12">
        <div className="border-bgray-300 col-span-12 2xl:col-span-9 2xl:border-r">
          <h3 className="text-bgray-900 mb-3 text-2xl font-bold dark:text-white">Folders</h3>
          <div className="flex flex-wrap gap-3 gap-y-5 lg:gap-x-0">
            <Folders />
            <Folders />
            <Folders />
            <Folders />
            <Folders />
            <AddFolders />
          </div>
          <h3 className="text-bgray-900 mb-5 mt-10 text-3xl font-bold dark:text-white">Files</h3>
          <div className="flex flex-wrap gap-x-3 gap-y-5 md:gap-x-10 lg:gap-x-0">
            <Files name=" All Invoice" size="1.4 MB">
              <svg
                width="67"
                height="86"
                viewBox="0 0 67 86"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M5.4032 0H46.9892L67 19.8123V80.625C67 83.5946 64.5796 86 61.5968 86H5.4032C2.42052 86 0 83.5946 0 80.625V5.37496C0 2.40536 2.4208 0 5.4032 0Z"
                  fill="white"
                />
                <path
                  d="M5.4032 0.5H46.7835L66.5 20.0208V80.625C66.5 83.3158 64.306 85.5 61.5968 85.5H5.4032C2.69405 85.5 0.5 83.3158 0.5 80.625V5.37496C0.5 2.68413 2.6943 0.5 5.4032 0.5Z"
                  stroke="#E8E9EB"
                />
                <path
                  d="M65.9198 20.4252H51.2864C48.6265 20.4252 46.468 18.2802 46.468 15.6368V1.0752"
                  stroke="#E8E9EB"
                />
                <path
                  d="M17.2903 31.0996C17.2903 30.5473 17.738 30.0996 18.2903 30.0996H48.7098C49.262 30.0996 49.7098 30.5473 49.7098 31.0996V63.4996C49.7098 64.0519 49.262 64.4996 48.7098 64.4996H18.2903C17.738 64.4996 17.2903 64.0519 17.2903 63.4996V31.0996Z"
                  fill="#304FFD"
                />
                <path
                  d="M40.6533 41.7275C40.7643 41.4409 40.9309 41.2259 41.153 41.0825C41.3874 40.9272 41.6465 40.8496 41.9303 40.8496C42.2881 40.8496 42.5904 40.9571 42.8372 41.1721C43.0963 41.3871 43.2259 41.6797 43.2259 42.05C43.2259 42.2292 43.1888 42.4263 43.1148 42.6413L39.2652 52.8359C39.1541 53.1225 38.9567 53.3495 38.6729 53.5167C38.4015 53.672 38.0992 53.7496 37.7661 53.7496C37.4329 53.7496 37.1306 53.672 36.8592 53.5167C36.5877 53.3495 36.3965 53.1225 36.2854 52.8359L33.5278 45.2929L30.6961 52.8359C30.585 53.1225 30.3938 53.3495 30.1223 53.5167C29.8509 53.672 29.5486 53.7496 29.2155 53.7496C28.8947 53.7496 28.5924 53.672 28.3086 53.5167C28.0371 53.3495 27.8459 53.1225 27.7348 52.8359L23.8852 42.6413C23.8112 42.4382 23.7742 42.2471 23.7742 42.0679C23.7742 41.6977 23.9099 41.405 24.1813 41.19C24.4528 40.9631 24.7736 40.8496 25.1437 40.8496C25.4399 40.8496 25.7051 40.9272 25.9396 41.0825C26.1864 41.2259 26.3653 41.4409 26.4763 41.7275L29.3265 49.6646L32.2878 41.7634C32.3988 41.4767 32.5715 41.2557 32.806 41.1004C33.0527 40.9452 33.3119 40.8675 33.5833 40.8675C33.8671 40.8675 34.1262 40.9452 34.3606 41.1004C34.5951 41.2557 34.7678 41.4827 34.8788 41.7813L37.7105 49.8079L40.6533 41.7275Z"
                  fill="white"
                />
              </svg>
            </Files>
            <Files name="Bank Stat.." size="1.9 GB">
              <svg
                width="67"
                height="86"
                viewBox="0 0 67 86"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M5.4032 0H46.9892L67 19.8123V80.625C67 83.5946 64.5796 86 61.5968 86H5.4032C2.42052 86 0 83.5946 0 80.625V5.37496C0 2.40536 2.4208 0 5.4032 0Z"
                  fill="white"
                />
                <path
                  d="M5.4032 0.5H46.7835L66.5 20.0208V80.625C66.5 83.3158 64.306 85.5 61.5968 85.5H5.4032C2.69405 85.5 0.5 83.3158 0.5 80.625V5.37496C0.5 2.68413 2.6943 0.5 5.4032 0.5Z"
                  stroke="#E8E9EB"
                />
                <path
                  d="M65.9198 20.4252H51.2864C48.6265 20.4252 46.468 18.2802 46.468 15.6368V1.0752"
                  stroke="#E8E9EB"
                />
                <path
                  d="M34.7022 51.4466V48.8359H37.3266V46.2252H34.7022V43.6145H37.3266V41.0038H34.7022V38.3931H37.3266V35.7823H34.7022V33.1716H37.3266V30.5609H34.7022V27.9502H32.0777V30.5609H29.4533V33.1716H32.0777V35.7823H29.4533V38.3931H32.0777V41.0038H29.4533V43.6145H32.0777V46.2252H29.4533V48.8359H32.0777V51.4466H26.8289V57.9734C26.8289 61.5723 29.7722 64.5002 33.3899 64.5002C37.0077 64.5002 39.951 61.5723 39.951 57.9734V51.4466H34.7022ZM37.3266 57.9734C37.3266 60.1325 35.5603 61.8895 33.3899 61.8895C31.2195 61.8895 29.4533 60.1325 29.4533 57.9734V54.0573H37.3266V57.9734Z"
                  fill="#8A9099"
                />
                <path
                  d="M32.0778 59.2787H34.7023C35.4266 59.2787 36.0145 58.6952 36.0145 57.9733C36.0145 57.2515 35.4266 56.668 34.7023 56.668H32.0778C31.3535 56.668 30.7656 57.2515 30.7656 57.9733C30.7656 58.6952 31.3535 59.2787 32.0778 59.2787Z"
                  fill="#8A9099"
                />
              </svg>
            </Files>
            <Files name=" vCard – Resume..." size="1.4 MB">
              <svg
                width="67"
                height="86"
                viewBox="0 0 67 86"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M5.4032 0H46.9892L67 19.8123V80.625C67 83.5946 64.5796 86 61.5968 86H5.4032C2.42052 86 0 83.5946 0 80.625V5.37496C0 2.40536 2.4208 0 5.4032 0Z"
                  fill="white"
                />
                <path
                  d="M5.4032 0.5H46.7835L66.5 20.0208V80.625C66.5 83.3158 64.306 85.5 61.5968 85.5H5.4032C2.69405 85.5 0.5 83.3158 0.5 80.625V5.37496C0.5 2.68413 2.6943 0.5 5.4032 0.5Z"
                  stroke="#E8E9EB"
                />
                <path
                  d="M65.9198 20.4252H51.2864C48.6265 20.4252 46.468 18.2802 46.468 15.6368V1.0752"
                  stroke="#E8E9EB"
                />
                <path
                  d="M33.1393 41.8448C33.1393 43.1315 32.8209 44.3378 32.184 45.4636C31.5706 46.5895 30.5917 47.497 29.2471 48.1863C27.9262 48.8756 26.2513 49.2203 24.2227 49.2203H20.0828V58.4569H15.1292V34.4004H24.2227C26.1334 34.4004 27.761 34.7221 29.1056 35.3654C30.4502 36.0088 31.4527 36.8933 32.1132 38.0192C32.7973 39.1451 33.1393 40.4203 33.1393 41.8448ZM24.0104 45.3258C25.3785 45.3258 26.3929 45.0271 27.0534 44.4297C27.7139 43.8093 28.0441 42.9477 28.0441 41.8448C28.0441 39.5012 26.6995 38.3294 24.0104 38.3294H20.0828V45.3258H24.0104Z"
                  fill="#5889C4"
                />
                <path
                  d="M44.1576 58.7671C42.5536 58.7671 41.1147 58.4913 39.8409 57.9399C38.5671 57.3655 37.5527 56.5958 36.7979 55.6308C36.0666 54.6657 35.6656 53.5973 35.5949 52.4255H40.5839C40.6783 53.1608 41.0439 53.7697 41.6808 54.2522C42.3413 54.7347 43.1551 54.9759 44.1223 54.9759C45.0658 54.9759 45.7971 54.7921 46.316 54.4245C46.8586 54.0569 47.1299 53.5858 47.1299 53.0114C47.1299 52.3911 46.7996 51.9315 46.1391 51.6328C45.5022 51.3112 44.4761 50.9665 43.0608 50.5989C41.5982 50.2542 40.3952 49.8981 39.4517 49.5305C38.5317 49.1628 37.7297 48.5999 37.0456 47.8417C36.3851 47.0835 36.0548 46.061 36.0548 44.7743C36.0548 43.7174 36.3615 42.7524 36.9748 41.8793C37.6117 41.0062 38.5081 40.3169 39.664 39.8114C40.8434 39.3059 42.2234 39.0531 43.8038 39.0531C46.1391 39.0531 48.0026 39.6276 49.3944 40.7764C50.7861 41.9022 51.5528 43.4302 51.6943 45.3602H46.9529C46.8822 44.602 46.5519 44.0046 45.9622 43.568C45.3961 43.1085 44.6294 42.8787 43.6623 42.8787C42.7659 42.8787 42.07 43.0396 41.5747 43.3613C41.1029 43.6829 40.867 44.131 40.867 44.7054C40.867 45.3487 41.1972 45.8427 41.8577 46.1874C42.5182 46.5091 43.5443 46.8422 44.9361 47.1869C46.3514 47.5315 47.5191 47.8876 48.439 48.2553C49.359 48.6229 50.1492 49.1973 50.8097 49.9785C51.4938 50.7367 51.8476 51.7477 51.8712 53.0114C51.8712 54.1143 51.5528 55.1023 50.9159 55.9754C50.3026 56.8485 49.4062 57.5378 48.2267 58.0433C47.0709 58.5258 45.7145 58.7671 44.1576 58.7671Z"
                  fill="#5889C4"
                />
              </svg>
            </Files>
            <Files name="Project Brief" size="1.4 MB">
              <svg
                width="67"
                height="86"
                viewBox="0 0 67 86"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M5.4032 0H46.9892L67 19.8123V80.625C67 83.5946 64.5796 86 61.5968 86H5.4032C2.42052 86 0 83.5946 0 80.625V5.37496C0 2.40536 2.4208 0 5.4032 0Z"
                  fill="white"
                />
                <path
                  d="M5.4032 0.5H46.7835L66.5 20.0208V80.625C66.5 83.3158 64.306 85.5 61.5968 85.5H5.4032C2.69405 85.5 0.5 83.3158 0.5 80.625V5.37496C0.5 2.68413 2.6943 0.5 5.4032 0.5Z"
                  stroke="#E8E9EB"
                />
                <path
                  d="M65.9198 20.4252H51.2864C48.6265 20.4252 46.468 18.2802 46.468 15.6368V1.0752"
                  stroke="#E8E9EB"
                />
                <path
                  d="M17.2903 31.0996C17.2903 30.5473 17.738 30.0996 18.2903 30.0996H48.7098C49.262 30.0996 49.7098 30.5473 49.7098 31.0996V63.4996C49.7098 64.0519 49.262 64.4996 48.7098 64.4996H18.2903C17.738 64.4996 17.2903 64.0519 17.2903 63.4996V31.0996Z"
                  fill="#304FFD"
                />
                <path
                  d="M40.6533 41.7275C40.7643 41.4409 40.9309 41.2259 41.153 41.0825C41.3874 40.9272 41.6465 40.8496 41.9303 40.8496C42.2881 40.8496 42.5904 40.9571 42.8372 41.1721C43.0963 41.3871 43.2259 41.6797 43.2259 42.05C43.2259 42.2292 43.1888 42.4263 43.1148 42.6413L39.2652 52.8359C39.1541 53.1225 38.9567 53.3495 38.6729 53.5167C38.4015 53.672 38.0992 53.7496 37.7661 53.7496C37.4329 53.7496 37.1306 53.672 36.8592 53.5167C36.5877 53.3495 36.3965 53.1225 36.2854 52.8359L33.5278 45.2929L30.6961 52.8359C30.585 53.1225 30.3938 53.3495 30.1223 53.5167C29.8509 53.672 29.5486 53.7496 29.2155 53.7496C28.8947 53.7496 28.5924 53.672 28.3086 53.5167C28.0371 53.3495 27.8459 53.1225 27.7348 52.8359L23.8852 42.6413C23.8112 42.4382 23.7742 42.2471 23.7742 42.0679C23.7742 41.6977 23.9099 41.405 24.1813 41.19C24.4528 40.9631 24.7736 40.8496 25.1437 40.8496C25.4399 40.8496 25.7051 40.9272 25.9396 41.0825C26.1864 41.2259 26.3653 41.4409 26.4763 41.7275L29.3265 49.6646L32.2878 41.7634C32.3988 41.4767 32.5715 41.2557 32.806 41.1004C33.0527 40.9452 33.3119 40.8675 33.5833 40.8675C33.8671 40.8675 34.1262 40.9452 34.3606 41.1004C34.5951 41.2557 34.7678 41.4827 34.8788 41.7813L37.7105 49.8079L40.6533 41.7275Z"
                  fill="white"
                />
              </svg>
            </Files>
            <Files name="Brand Styles Guide" size="1.4 MB">
              <svg
                width="67"
                height="86"
                viewBox="0 0 67 86"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M5.4032 0H46.9892L67 19.8123V80.625C67 83.5946 64.5796 86 61.5968 86H5.4032C2.42052 86 0 83.5946 0 80.625V5.37496C0 2.40536 2.4208 0 5.4032 0Z"
                  fill="white"
                />
                <path
                  d="M5.4032 0.5H46.7835L66.5 20.0208V80.625C66.5 83.3158 64.306 85.5 61.5968 85.5H5.4032C2.69405 85.5 0.5 83.3158 0.5 80.625V5.37496C0.5 2.68413 2.6943 0.5 5.4032 0.5Z"
                  stroke="#E8E9EB"
                />
                <path
                  d="M65.9198 20.4252H51.2864C48.6265 20.4252 46.468 18.2802 46.468 15.6368V1.0752"
                  stroke="#E8E9EB"
                />
                <path
                  d="M20.2338 64.4996C19.7451 64.4996 19.276 64.3525 18.8757 64.0751C17.4136 63.058 17.2169 61.9264 17.3096 61.1555C17.5652 59.0354 20.3926 56.8164 25.7157 54.5557C27.8281 50.2635 29.838 44.9751 31.036 40.5566C29.6343 37.7281 28.2719 34.0584 29.2649 31.9058C29.6132 31.1518 30.0472 30.5736 30.8577 30.3236C31.1779 30.2246 31.9869 30.0996 32.2847 30.0996C32.9925 30.0996 33.6147 30.9448 34.0558 31.4657C34.4701 31.9553 35.4097 32.9932 33.5319 40.3235C35.4252 43.9489 38.1078 47.6421 40.6781 50.1711C42.5194 49.8624 44.1037 49.7048 45.3945 49.7048C47.594 49.7048 48.9269 50.1802 49.4704 51.1595C49.9198 51.9694 49.7359 52.9162 48.9226 53.9723C48.1403 54.9867 47.0616 55.5233 45.8046 55.5233C44.0967 55.5233 42.1079 54.5231 39.8901 52.5476C35.9055 53.3199 31.2523 54.6976 27.491 56.2226C26.3168 58.5327 25.1918 60.3936 24.144 61.7584C22.7044 63.6271 21.4628 64.4996 20.2338 64.4996ZM23.9727 57.8243C20.9712 59.3883 19.7479 60.6736 19.6594 61.3977C19.6453 61.5175 19.6074 61.8326 20.2647 62.2988C20.474 62.2376 21.696 61.7206 23.9727 57.8243ZM43.1262 52.0398C44.2709 52.8563 44.5504 53.2691 45.299 53.2691C45.6276 53.2691 46.5644 53.2561 46.9984 52.6948C47.2077 52.4226 47.2892 52.2481 47.3215 52.1544C47.1487 52.0697 46.9198 51.8978 45.6712 51.8978C44.9619 51.8991 44.07 51.9278 43.1262 52.0398ZM32.6344 43.4684C31.6301 46.6902 30.3043 50.1684 28.8787 53.3186C31.8141 52.2625 35.0052 51.3405 38.0025 50.688C36.1064 48.6461 34.2117 46.0963 32.6344 43.4684ZM31.7818 32.4489C31.6442 32.4918 29.9138 34.7369 31.9167 36.6369C33.2496 33.8826 31.8422 32.4306 31.7818 32.4489Z"
                  fill="#E2574C"
                />
              </svg>
            </Files>
          </div>
        </div>
        <div className="col-span-3 hidden pl-11 pt-14 2xl:block">
          <div className="flex flex-col items-center">
            <svg
              width="120"
              height="120"
              viewBox="0 0 120 120"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.56578 12.9268H36.2647C38.1443 12.9268 39.8804 13.9307 40.8183 15.5595L45.5417 22.0121C46.4796 23.6408 48.216 24.6448 50.0953 24.6448H120V98.3153C120 102.184 116.863 105.321 112.994 105.321H7.00587C3.13675 105.321 0 102.184 0 98.3153V32.8171C0 27.4018 0.836656 22.0188 2.4805 16.8589C3.08269 14.5432 5.17317 12.9268 7.56578 12.9268Z"
                fill="#4ADE80"
              />
              <path d="M103.16 23.4395H10.9199V62.4043H103.16V23.4395Z" fill="#EBF0F3" />
              <path
                d="M114.746 16.4297H85.825C83.7683 16.4297 81.9005 17.6297 81.0459 19.5003L76.097 30.3312C75.2421 32.2019 73.3746 33.4019 71.3179 33.4019H0V100.067C0 103.936 3.13675 107.072 7.00587 107.072H112.994C116.863 107.072 120 103.936 120 100.067V21.6841C120 18.7823 117.647 16.4297 114.746 16.4297Z"
                fill="#22C55E"
              />
            </svg>
            <h3 className="text-bgray-600 text-2xl font-semibold dark:text-white">Projects</h3>
          </div>
          <ProjectInfo />
          <PRSettings />
        </div>
      </div>
    </div>
  );
}

ProgramAndResources.propTypes = {
  name: ProtoTypes.string,
  activeTab: ProtoTypes.string,
};

export default ProgramAndResources;
