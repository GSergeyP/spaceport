const url = 'https://api.stoking.ru/v1/brands?selection%5bfilter%5d=%5b%7B%22id%22:%22used%22,%22value%22:1%7D%5d&expand=thumbnail.sizes&fields=id,name,slug,thumbnail.*&per-page=36&page=1&sort=-countDeal';

const svgIconData = [
  {
    path: <g><path d="M39.8939 89.2385C39.2059 89.2385 38.4939 89.1345 37.7579 88.9265C37.0219 88.7025 36.3339 88.3745 35.6939 87.9425C35.4379 87.7825 35.2699 87.5745 35.1899 87.3185C35.1099 87.0625 35.0939 86.8145 35.1419 86.5745C35.2059 86.3185 35.3179 86.1025 35.4779 85.9265C35.6539 85.7345 35.8699 85.6225 36.1259 85.5905C36.3819 85.5425 36.6619 85.6065 36.9659 85.7825C37.5099 86.1025 38.0219 86.3265 38.5019 86.4545C38.9819 86.5825 39.4619 86.6465 39.9419 86.6465C40.8699 86.6465 41.6539 86.4305 42.2939 85.9985C42.9339 85.5665 43.4139 84.9185 43.7339 84.0545C44.0699 83.1745 44.2379 82.0945 44.2379 80.8145V79.0145H44.5259C44.4139 79.8145 44.1499 80.5105 43.7339 81.1025C43.3179 81.6945 42.7899 82.1505 42.1499 82.4705C41.5099 82.7745 40.7979 82.9265 40.0139 82.9265C39.0539 82.9265 38.1899 82.6945 37.4219 82.2305C36.6699 81.7665 36.0779 81.1265 35.6459 80.3105C35.2139 79.4785 34.9979 78.5425 34.9979 77.5025C34.9979 76.3985 35.2299 75.4225 35.6939 74.5745C36.1739 73.7265 36.8379 73.0625 37.6859 72.5825C38.5339 72.0865 39.5019 71.8385 40.5899 71.8385C41.9979 71.8385 43.1899 72.1665 44.1659 72.8225C45.1419 73.4785 45.8859 74.4385 46.3979 75.7025C46.9099 76.9505 47.1659 78.4625 47.1659 80.2385C47.1659 81.6785 46.9979 82.9585 46.6619 84.0785C46.3419 85.1825 45.8699 86.1185 45.2459 86.8865C44.6219 87.6545 43.8539 88.2385 42.9419 88.6385C42.0459 89.0385 41.0299 89.2385 39.8939 89.2385ZM40.7819 80.4785C41.3579 80.4785 41.8619 80.3505 42.2939 80.0945C42.7419 79.8225 43.0859 79.4545 43.3259 78.9905C43.5659 78.5105 43.6859 77.9665 43.6859 77.3585C43.6859 76.7345 43.5659 76.1905 43.3259 75.7265C43.0859 75.2625 42.7419 74.9025 42.2939 74.6465C41.8619 74.3905 41.3579 74.2625 40.7819 74.2625C40.2059 74.2625 39.7019 74.3905 39.2699 74.6465C38.8379 74.9025 38.4939 75.2625 38.2379 75.7265C37.9979 76.1905 37.8779 76.7345 37.8779 77.3585C37.8779 77.9665 37.9979 78.5105 38.2379 78.9905C38.4939 79.4545 38.8379 79.8225 39.2699 80.0945C39.7019 80.3505 40.2059 80.4785 40.7819 80.4785ZM52.1485 88.9985C51.7325 88.9985 51.4045 88.8865 51.1645 88.6625C50.9405 88.4225 50.8285 88.1025 50.8285 87.7025C50.8285 87.2865 50.9405 86.9745 51.1645 86.7665C51.4045 86.5585 51.7325 86.4545 52.1485 86.4545H54.8365V74.6705H56.3245L52.7965 76.8065C52.4925 76.9825 52.2045 77.0545 51.9325 77.0225C51.6765 76.9745 51.4525 76.8625 51.2605 76.6865C51.0845 76.4945 50.9645 76.2705 50.9005 76.0145C50.8365 75.7585 50.8525 75.5025 50.9485 75.2465C51.0605 74.9745 51.2685 74.7505 51.5725 74.5745L54.8845 72.5825C55.2045 72.3905 55.5245 72.2305 55.8445 72.1025C56.1645 71.9585 56.4605 71.8865 56.7325 71.8865C57.0685 71.8865 57.3485 71.9825 57.5725 72.1745C57.7965 72.3505 57.9085 72.6465 57.9085 73.0625V86.4545H60.3565C60.7725 86.4545 61.0925 86.5585 61.3165 86.7665C61.5565 86.9745 61.6765 87.2865 61.6765 87.7025C61.6765 88.1185 61.5565 88.4385 61.3165 88.6625C61.0925 88.8865 60.7725 88.9985 60.3565 88.9985H52.1485ZM76.5108 89.2385C75.2628 89.2385 74.1748 88.9825 73.2468 88.4705C72.3348 87.9585 71.6308 87.1985 71.1348 86.1905C70.6388 85.1665 70.3908 83.9105 70.3908 82.4225V80.6705C70.3908 79.0865 70.6228 77.7665 71.0868 76.7105C71.5668 75.6385 72.2708 74.7825 73.1988 74.1425C74.1428 73.4865 75.3028 72.9905 76.6788 72.6545L79.7988 71.8865C80.2148 71.7745 80.5668 71.7985 80.8548 71.9585C81.1428 72.1025 81.3268 72.3745 81.4068 72.7745C81.4868 73.1745 81.4228 73.5185 81.2148 73.8065C81.0068 74.0785 80.6868 74.2625 80.2548 74.3585L76.8948 75.1505C76.0948 75.3425 75.4228 75.6465 74.8788 76.0625C74.3348 76.4625 73.9188 76.9665 73.6308 77.5745C73.3588 78.1825 73.2228 78.8865 73.2228 79.6865V80.9825H72.8148C72.9748 80.2945 73.2468 79.6785 73.6308 79.1345C74.0308 78.5905 74.5428 78.1665 75.1668 77.8625C75.7908 77.5425 76.5188 77.3825 77.3508 77.3825C78.3268 77.3825 79.1908 77.6225 79.9428 78.1025C80.7108 78.5665 81.3108 79.2305 81.7428 80.0945C82.1748 80.9585 82.3908 81.9905 82.3908 83.1905C82.3908 84.4225 82.1428 85.4945 81.6468 86.4065C81.1668 87.3025 80.4868 87.9985 79.6068 88.4945C78.7268 88.9905 77.6948 89.2385 76.5108 89.2385ZM76.3908 86.9585C77.0308 86.9585 77.5668 86.8225 77.9988 86.5505C78.4468 86.2625 78.7828 85.8465 79.0068 85.3025C79.2468 84.7585 79.3668 84.0945 79.3668 83.3105C79.3668 82.1425 79.1028 81.2465 78.5748 80.6225C78.0628 79.9825 77.3348 79.6625 76.3908 79.6625C75.7668 79.6625 75.2308 79.8065 74.7828 80.0945C74.3348 80.3665 73.9908 80.7665 73.7508 81.2945C73.5268 81.8225 73.4148 82.4545 73.4148 83.1905C73.4148 84.4225 73.6708 85.3585 74.1828 85.9985C74.7108 86.6385 75.4468 86.9585 76.3908 86.9585ZM86.683 93.5105C86.203 93.5105 85.835 93.3825 85.579 93.1265C85.323 92.8705 85.195 92.4945 85.195 91.9985V78.5825C85.195 78.0865 85.323 77.7105 85.579 77.4545C85.835 77.1985 86.195 77.0705 86.659 77.0705C87.139 77.0705 87.507 77.1985 87.763 77.4545C88.019 77.7105 88.147 78.0865 88.147 78.5825V80.4545L87.883 79.7345C88.123 78.9185 88.611 78.2625 89.347 77.7665C90.099 77.2705 90.971 77.0225 91.963 77.0225C92.987 77.0225 93.883 77.2705 94.651 77.7665C95.435 78.2625 96.043 78.9665 96.475 79.8785C96.907 80.7745 97.123 81.8545 97.123 83.1185C97.123 84.3665 96.907 85.4545 96.475 86.3825C96.043 87.2945 95.443 87.9985 94.675 88.4945C93.907 88.9905 93.003 89.2385 91.963 89.2385C90.987 89.2385 90.131 88.9985 89.395 88.5185C88.659 88.0225 88.163 87.3825 87.907 86.5985H88.195V91.9985C88.195 92.4945 88.059 92.8705 87.787 93.1265C87.531 93.3825 87.163 93.5105 86.683 93.5105ZM91.123 86.9585C91.715 86.9585 92.235 86.8145 92.683 86.5265C93.131 86.2385 93.475 85.8145 93.715 85.2545C93.971 84.6785 94.099 83.9665 94.099 83.1185C94.099 81.8385 93.827 80.8865 93.283 80.2625C92.739 79.6225 92.019 79.3025 91.123 79.3025C90.531 79.3025 90.011 79.4465 89.563 79.7345C89.115 80.0065 88.763 80.4305 88.507 81.0065C88.267 81.5665 88.147 82.2705 88.147 83.1185C88.147 84.3825 88.419 85.3425 88.963 85.9985C89.507 86.6385 90.227 86.9585 91.123 86.9585ZM105.721 89.2385C104.393 89.2385 103.249 88.9905 102.289 88.4945C101.329 87.9985 100.585 87.2945 100.057 86.3825C99.5452 85.4705 99.2892 84.3905 99.2892 83.1425C99.2892 81.9265 99.5372 80.8625 100.033 79.9505C100.545 79.0385 101.241 78.3265 102.121 77.8145C103.017 77.2865 104.033 77.0225 105.169 77.0225C106.001 77.0225 106.745 77.1585 107.401 77.4305C108.073 77.7025 108.641 78.0945 109.105 78.6065C109.585 79.1185 109.945 79.7425 110.185 80.4785C110.441 81.1985 110.569 82.0145 110.569 82.9265C110.569 83.2145 110.465 83.4385 110.257 83.5985C110.065 83.7425 109.785 83.8145 109.417 83.8145H101.713V82.0865H108.457L108.073 82.4465C108.073 81.7105 107.961 81.0945 107.737 80.5985C107.529 80.1025 107.217 79.7265 106.801 79.4705C106.401 79.1985 105.897 79.0625 105.289 79.0625C104.617 79.0625 104.041 79.2225 103.561 79.5425C103.097 79.8465 102.737 80.2865 102.481 80.8625C102.241 81.4225 102.121 82.0945 102.121 82.8785V83.0465C102.121 84.3585 102.425 85.3425 103.033 85.9985C103.657 86.6385 104.569 86.9585 105.769 86.9585C106.185 86.9585 106.649 86.9105 107.161 86.8145C107.689 86.7025 108.185 86.5185 108.649 86.2625C108.985 86.0705 109.281 85.9905 109.537 86.0225C109.793 86.0385 109.993 86.1265 110.137 86.2865C110.297 86.4465 110.393 86.6465 110.425 86.8865C110.457 87.1105 110.409 87.3425 110.281 87.5825C110.169 87.8225 109.969 88.0305 109.681 88.2065C109.121 88.5585 108.473 88.8225 107.737 88.9985C107.017 89.1585 106.345 89.2385 105.721 89.2385ZM114.761 89.1905C114.281 89.1905 113.905 89.0625 113.633 88.8065C113.377 88.5345 113.249 88.1505 113.249 87.6545V78.5825C113.249 78.0705 113.377 77.6945 113.633 77.4545C113.905 77.1985 114.281 77.0705 114.761 77.0705C115.241 77.0705 115.609 77.1985 115.865 77.4545C116.121 77.6945 116.249 78.0705 116.249 78.5825V81.7985H121.433V78.5825C121.433 78.0705 121.561 77.6945 121.817 77.4545C122.073 77.1985 122.441 77.0705 122.921 77.0705C123.401 77.0705 123.769 77.1985 124.025 77.4545C124.297 77.6945 124.433 78.0705 124.433 78.5825V87.6545C124.433 88.1505 124.297 88.5345 124.025 88.8065C123.769 89.0625 123.401 89.1905 122.921 89.1905C122.441 89.1905 122.073 89.0625 121.817 88.8065C121.561 88.5345 121.433 88.1505 121.433 87.6545V84.1505H116.249V87.6545C116.249 88.1505 116.121 88.5345 115.865 88.8065C115.625 89.0625 115.257 89.1905 114.761 89.1905ZM128.067 92.3105C127.667 92.3105 127.347 92.1905 127.107 91.9505C126.883 91.7265 126.771 91.3985 126.771 90.9665V88.0385C126.771 87.1105 127.235 86.6465 128.163 86.6465H129.507L127.731 87.2705C128.147 86.7105 128.475 86.1265 128.715 85.5185C128.955 84.9105 129.131 84.2145 129.243 83.4305C129.355 82.6305 129.411 81.6865 129.411 80.5985V78.9425C129.411 78.3985 129.555 77.9825 129.843 77.6945C130.131 77.4065 130.547 77.2625 131.091 77.2625H136.875C137.419 77.2625 137.835 77.4065 138.123 77.6945C138.411 77.9825 138.555 78.3985 138.555 78.9425V88.0385L137.163 86.6465H139.083C139.531 86.6465 139.875 86.7665 140.115 87.0065C140.355 87.2305 140.475 87.5745 140.475 88.0385V90.9665C140.475 91.8625 140.051 92.3105 139.203 92.3105C138.787 92.3105 138.467 92.1905 138.243 91.9505C138.035 91.7265 137.931 91.3985 137.931 90.9665V88.9985H129.315V90.9665C129.315 91.8625 128.899 92.3105 128.067 92.3105ZM130.827 86.6465H135.747V79.5665H131.979V81.2945C131.979 82.3025 131.875 83.2785 131.667 84.2225C131.475 85.1665 131.195 85.9745 130.827 86.6465Z" fill="#ED7117"/><path d="M10.7738 84.6548C10.6693 84.776 10.5576 84.842 10.4386 84.8529C10.3194 84.8597 10.1991 84.8108 10.0779 84.7063L8.45166 83.3043C8.33045 83.1998 8.26551 83.089 8.25684 82.972C8.24787 82.8508 8.29563 82.7296 8.40012 82.6083L9.1171 81.7767C9.2661 81.6039 9.41867 81.4791 9.57479 81.4024C9.72867 81.3237 9.87872 81.2927 10.0249 81.3092C10.1731 81.3234 10.3089 81.3838 10.4323 81.4902C10.5693 81.6082 10.6532 81.7491 10.6843 81.9128C10.7172 82.0743 10.6946 82.2367 10.6163 82.4001L10.5591 82.3508C10.7302 82.2204 10.903 82.1561 11.0775 82.1579C11.2498 82.1578 11.4134 82.2245 11.5683 82.358C11.7748 82.536 11.874 82.7546 11.8659 83.0136C11.8577 83.2727 11.7414 83.5324 11.5169 83.7928L10.7738 84.6548ZM10.5214 83.8854L10.9046 83.441C10.9859 83.3467 11.0271 83.2649 11.0283 83.1954C11.0291 83.1218 10.9948 83.055 10.9252 82.995C10.8556 82.935 10.7856 82.9119 10.7151 82.9255C10.6444 82.9349 10.5684 82.9868 10.4871 83.0811L10.1039 83.5255L10.5214 83.8854ZM9.5787 83.0727L9.9067 82.6922C9.98798 82.5979 10.0314 82.518 10.0371 82.4525C10.0405 82.385 10.0085 82.3222 9.9412 82.2641C9.87386 82.2061 9.80818 82.1847 9.74417 82.1999C9.68016 82.2152 9.60751 82.2699 9.52624 82.3642L9.19823 82.7447L9.5787 83.0727Z" fill="#ED7117"/><path d="M12.8596 82.3035C12.759 82.4202 12.6502 82.4829 12.5331 82.4915C12.4138 82.4983 12.2958 82.4513 12.1791 82.3507L10.5057 80.9081C10.3868 80.8055 10.323 80.6957 10.3143 80.5787C10.3076 80.4594 10.3545 80.3414 10.4551 80.2247L11.1779 79.3863C11.414 79.1124 11.6644 78.9605 11.929 78.9304C12.1933 78.8961 12.4434 78.9805 12.679 79.1837C12.8339 79.3172 12.9396 79.467 12.996 79.633C13.0502 79.7971 13.0535 79.9703 13.0061 80.1524C12.9583 80.3303 12.8551 80.5113 12.6964 80.6954L12.6528 80.6167L12.8182 80.4248C12.9034 80.326 13.0024 80.2588 13.1153 80.2231C13.226 80.1855 13.3487 80.1817 13.4833 80.2116L13.797 80.2766C13.9101 80.2998 14.0006 80.3446 14.0686 80.411C14.1362 80.4732 14.1704 80.5516 14.1711 80.6461C14.1715 80.7364 14.1262 80.8343 14.0352 80.9398C13.9481 81.0409 13.8563 81.1065 13.7598 81.1367C13.661 81.1651 13.5455 81.1652 13.4131 81.1372L12.6349 80.971C12.5857 80.96 12.5399 80.9655 12.4974 80.9875C12.4527 81.0076 12.4148 81.0357 12.3839 81.0716L12.2881 81.1827L12.8032 81.6268C12.9199 81.7274 12.9847 81.8361 12.9976 81.9528C13.0082 82.0676 12.9622 82.1845 12.8596 82.3035ZM11.783 80.7473L12.082 80.4005C12.1671 80.3017 12.2129 80.2101 12.2192 80.1255C12.2275 80.0388 12.1913 79.9606 12.1105 79.8909C12.0319 79.8232 11.9503 79.7998 11.8657 79.8208C11.783 79.8395 11.6991 79.8982 11.614 79.997L11.315 80.3438L11.783 80.7473Z" fill="#ED7117"/><path d="M14.7264 80.1381C14.6568 80.2189 14.5787 80.2709 14.4921 80.2941C14.4075 80.3151 14.3259 80.3054 14.2473 80.265C14.1683 80.2204 14.1038 80.1432 14.0536 80.0335L13.0427 77.7474C12.9824 77.6132 12.9576 77.4921 12.9686 77.3841C12.9814 77.2739 13.0265 77.1739 13.1039 77.0841C13.1813 76.9943 13.2726 76.9361 13.3778 76.9094C13.483 76.8827 13.6064 76.8893 13.7481 76.9293L16.1581 77.5924C16.2782 77.6255 16.3661 77.6779 16.4219 77.7494C16.4773 77.8167 16.5008 77.8938 16.4926 77.9805C16.484 78.0631 16.4458 78.1437 16.3781 78.2223C16.2891 78.3255 16.1968 78.3849 16.1013 78.4004C16.0058 78.4158 15.8859 78.4006 15.7417 78.3545L15.2253 78.191L15.6595 78.0958L14.4781 79.4662L14.5083 79.0227L14.7461 79.5094C14.8129 79.6452 14.8485 79.7581 14.8531 79.8482C14.8577 79.9382 14.8154 80.0348 14.7264 80.1381ZM13.8793 77.7643L14.4081 78.8189L14.1291 78.7544L14.9041 77.8555L15.009 78.1219L13.8851 77.7576L13.8793 77.7643Z" fill="#ED7117"/><path d="M17.1224 77.3589C17.0276 77.4688 16.9259 77.5279 16.8172 77.5359C16.7105 77.5417 16.6021 77.4972 16.4921 77.4024L14.748 75.8988C14.6335 75.8001 14.5702 75.6965 14.558 75.5882C14.5454 75.4756 14.5808 75.3711 14.664 75.2746C14.7336 75.1938 14.8056 75.1443 14.8799 75.1262C14.9539 75.1039 15.052 75.0946 15.1741 75.0981L17.1283 75.1394L17.0412 75.2404L16.0345 74.3725C15.9245 74.2777 15.8645 74.177 15.8545 74.0706C15.8465 73.9619 15.8899 73.8526 15.9847 73.7426C16.0795 73.6326 16.1803 73.5747 16.287 73.5689C16.3957 73.5609 16.5051 73.6043 16.615 73.6991L18.3928 75.2317C18.4893 75.3149 18.5447 75.4096 18.5588 75.5157C18.5727 75.6177 18.5409 75.7135 18.4635 75.8033C18.3861 75.8931 18.3094 75.9503 18.2335 75.9748C18.1553 75.9974 18.0552 76.0069 17.933 76.0033L15.9788 75.9621L16.0659 75.8611L17.0727 76.729C17.1826 76.8238 17.2417 76.9256 17.2497 77.0342C17.2597 77.1407 17.2173 77.2489 17.1224 77.3589Z" fill="#ED7117"/><path d="M19.3346 74.7248C19.2301 74.846 19.1184 74.9121 18.9994 74.923C18.8801 74.9297 18.7599 74.8808 18.6387 74.7763L17.0124 73.3743C16.8912 73.2698 16.8263 73.1591 16.8176 73.042C16.8086 72.9208 16.8564 72.7996 16.9609 72.6784L17.5327 72.0151C17.8965 71.5931 18.2825 71.3565 18.6905 71.3053C19.0964 71.2521 19.4867 71.3871 19.8616 71.7103C20.0501 71.8728 20.1923 72.0483 20.2882 72.2366C20.3838 72.4207 20.4339 72.6146 20.4385 72.818C20.4427 73.0174 20.4011 73.2222 20.3137 73.4325C20.2241 73.6408 20.0883 73.8505 19.9064 74.0615L19.3346 74.7248ZM19.0506 73.8696L19.2828 73.6002C19.3738 73.4947 19.4398 73.3932 19.4809 73.2956C19.524 73.1957 19.543 73.0987 19.5382 73.0045C19.5333 72.9103 19.5045 72.8189 19.4517 72.7304C19.3966 72.6399 19.3175 72.5501 19.2143 72.4611C19.0077 72.2831 18.8117 72.2041 18.6262 72.2241C18.4426 72.2419 18.2608 72.3552 18.0808 72.5639L17.8486 72.8333L19.0506 73.8696Z" fill="#ED7117"/><circle cx="21.967" cy="69.1392" r="0.744679" transform="rotate(40.163 21.967 69.1392)" fill="#D9D9D9" stroke="#ED7117"/><path d="M26.5945 73.7005L13.118 89.6687C12.9399 89.8798 12.6245 89.9065 12.4134 89.7284L3.47867 82.1878C3.26764 82.0097 3.24094 81.6942 3.41904 81.4832L16.8956 65.515C16.9987 65.3927 17.1542 65.3272 17.3137 65.3388L24.5231 65.86C24.7394 65.8757 24.9209 66.0289 24.9726 66.2394L26.698 73.2587C26.7362 73.414 26.6977 73.5783 26.5945 73.7005Z" stroke="#ED7117"/></g>,
    viewBox: '0 0 159 158'
  }
];

export { url, svgIconData };