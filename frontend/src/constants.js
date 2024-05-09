export const BASE_URL = "http://localhost:3000";

export const GeoJSONDataOfCountry = {
  type: "FeatureCollection",
  features: [
    {
      type: "Feature",
      properties: {
        name: "United States of America",
      },
      geometry: {
        type: "Polygon",
        coordinates: [
          [
            [-125, 50],
            [-125, 25],
            [-75, 25],
            [-75, 50],
            [-125, 50],
          ],
        ],
      },
    },
    {
      type: "Feature",
      properties: {
        name: "China",
      },
      geometry: {
        type: "Polygon",
        coordinates: [
          [
            [75, 50],
            [75, 25],
            [125, 25],
            [125, 50],
            [75, 50],
          ],
        ],
      },
    },
    {
      type: "Feature",
      properties: {
        name: "Russia",
      },
      geometry: {
        type: "Polygon",
        coordinates: [
          [
            [55, 80],
            [55, 60],
            [170, 60],
            [170, 80],
            [55, 80],
          ],
        ],
      },
    },
    {
      type: "Feature",
      properties: {
        name: "India",
      },
      geometry: {
        type: "Polygon",
        coordinates: [
          [
            [70, 35],
            [70, 10],
            [90, 10],
            [90, 35],
            [70, 35],
          ],
        ],
      },
    },
    {
      type: "Feature",
      properties: {
        name: "Egypt",
      },
      geometry: {
        type: "Polygon",
        coordinates: [
          [
            [25, 35],
            [25, 15],
            [35, 15],
            [35, 35],
            [25, 35],
          ],
        ],
      },
    },
    {
      type: "Feature",
      properties: {
        name: "Iran",
      },
      geometry: {
        type: "Polygon",
        coordinates: [
          [
            [45, 40],
            [45, 25],
            [60, 25],
            [60, 40],
            [45, 40],
          ],
        ],
      },
    },
    {
      type: "Feature",
      properties: {
        name: "United Kingdom",
      },
      geometry: {
        type: "Polygon",
        coordinates: [
          [
            [-10, 60],
            [-10, 50],
            [5, 50],
            [5, 60],
            [-10, 60],
          ],
        ],
      },
    },
    {
      type: "Feature",
      properties: {
        name: "Canada",
      },
      geometry: {
        type: "Polygon",
        coordinates: [
          [
            [-140, 70],
            [-140, 50],
            [-100, 50],
            [-100, 70],
            [-140, 70],
          ],
        ],
      },
    },
    {
      type: "Feature",
      properties: {
        name: "Indonesia",
      },
      geometry: {
        type: "Polygon",
        coordinates: [
          [
            [110, -5],
            [110, -20],
            [130, -20],
            [130, -5],
            [110, -5],
          ],
        ],
      },
    },
    {
      type: "Feature",
      properties: {
        name: "Brazil",
      },
      geometry: {
        type: "Polygon",
        coordinates: [
          [
            [-65, -10],
            [-65, -30],
            // [-55, -15],
            [-45, -30],
            [-45, -10],
            [-65, -10],
          ],
        ],
      },
    },
    {
      type: "Feature",
      properties: {
        name: "Japan",
      },
      geometry: {
        type: "Polygon",
        coordinates: [
          [
            [135, 40],
            [135, 30],
            [145, 30],
            [145, 40],
            [135, 40],
          ],
        ],
      },
    },
  ],
};

export const Countries = [
  "Afghanistan",
  "Albania",
  "Algeria",
  "Andorra",
  "Angola",
  "Antigua and Barbuda",
  "Argentina",
  "Armenia",
  "Australia",
  "Austria",
  "Azerbaijan",
  "Bahamas",
  "Bahrain",
  "Bangladesh",
  "Barbados",
  "Belarus",
  "Belgium",
  "Belize",
  "Benin",
  "Bhutan",
  "Bolivia",
  "Bosnia and Herzegovina",
  "Botswana",
  "Brazil",
  "Brunei",
  "Bulgaria",
  "Burkina Faso",
  "Burundi",
  "Cabo Verde",
  "Cambodia",
  "Cameroon",
  "Canada",
  "Central African Republic",
  "Chad",
  "Chile",
  "China",
  "Colombia",
  "Comoros",
  "Congo, Democratic Republic of the",
  "Congo, Republic of the",
  "Costa Rica",
  "Cote d'Ivoire",
  "Croatia",
  "Cuba",
  "Cyprus",
  "Czech Republic",
  "Denmark",
  "Djibouti",
  "Dominica",
  "Dominican Republic",
  "Ecuador",
  "Egypt",
  "El Salvador",
  "Equatorial Guinea",
  "Eritrea",
  "Estonia",
  "Eswatini",
  "Ethiopia",
  "Fiji",
  "Finland",
  "France",
  "Gabon",
  "Gambia",
  "Georgia",
  "Germany",
  "Ghana",
  "Greece",
  "Grenada",
  "Guatemala",
  "Guinea",
  "Guinea-Bissau",
  "Guyana",
  "Haiti",
  "Honduras",
  "Hungary",
  "Iceland",
  "India",
  "Indonesia",
  "Iran",
  "Iraq",
  "Ireland",
  "Israel",
  "Italy",
  "Jamaica",
  "Japan",
  "Jordan",
  "Kazakhstan",
  "Kenya",
  "Kiribati",
  "Korea, North",
  "Korea, South",
  "Kosovo",
  "Kuwait",
  "Kyrgyzstan",
  "Laos",
  "Latvia",
  "Lebanon",
  "Lesotho",
  "Liberia",
  "Libya",
  "Liechtenstein",
  "Lithuania",
  "Luxembourg",
  "Madagascar",
  "Malawi",
  "Malaysia",
  "Maldives",
  "Mali",
  "Malta",
  "Marshall Islands",
  "Mauritania",
  "Mauritius",
  "Mexico",
  "Micronesia",
  "Moldova",
  "Monaco",
  "Mongolia",
  "Montenegro",
  "Morocco",
  "Mozambique",
  "Myanmar",
  "Namibia",
  "Nauru",
  "Nepal",
  "Netherlands",
  "New Zealand",
  "Nicaragua",
  "Niger",
  "Nigeria",
  "North Macedonia",
  "Norway",
  "Oman",
  "Pakistan",
  "Palau",
  "Palestine",
  "Panama",
  "Papua New Guinea",
  "Paraguay",
  "Peru",
  "Philippines",
  "Poland",
  "Portugal",
  "Qatar",
  "Romania",
  "Russia",
  "Rwanda",
  "Saint Kitts and Nevis",
  "Saint Lucia",
  "Saint Vincent and the Grenadines",
  "Samoa",
  "San Marino",
  "Sao Tome and Principe",
  "Saudi Arabia",
  "Senegal",
  "Serbia",
  "Seychelles",
  "Sierra Leone",
  "Singapore",
  "Slovakia",
  "Slovenia",
  "Solomon Islands",
  "Somalia",
  "South Africa",
  "South Sudan",
  "Spain",
  "Sri Lanka",
  "Sudan",
  "Suriname",
  "Sweden",
  "Switzerland",
  "Syria",
  "Taiwan",
  "Tajikistan",
  "Tanzania",
  "Thailand",
  "Timor-Leste",
  "Togo",
  "Tonga",
  "Trinidad and Tobago",
  "Tunisia",
  "Turkey",
  "Turkmenistan",
  "Tuvalu",
  "Uganda",
  "Ukraine",
  "United Arab Emirates",
  "United Kingdom",
  "United States of America",
  "Uruguay",
  "Uzbekistan",
  "Vanuatu",
  "Vatican City",
  "Venezuela",
  "Vietnam",
  "Yemen",
  "Zambia",
  "Zimbabwe",
];

export const regions = [
  "Northern America",
  "World",
  "Southern Asia",
  "Western Asia",
  "South America",
  "Eastern Asia",
  "Northern Europe",
  "Northern Africa",
  "Central Africa",
  "Europe",
  "Eastern Africa",
  "Africa",
];
