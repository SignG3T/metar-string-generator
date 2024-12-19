# metar-string-generator

# METAR Encoder

A simple website that allows you to generate METAR strings by entering the desired data. METAR (Meteorological Aerodrome Report) is a standardized format for reporting weather conditions, used in aviation.

## Features

- **User-friendly interface**: Enter the required data through a simple and intuitive form.
- **METAR generation**: Automatically converts the entered data into a valid METAR string.
- **Multi-parameter support**: Handles temperature, wind, visibility, pressure, and more.
- **Quick copy**: Allows you to copy the generated METAR string with one click.

## Screenshot
![image1](https://github.com/SignG3T/metar-string-generator/blob/dev/image.png?raw=true)
![image2](https://github.com/SignG3T/metar-string-generator/blob/dev/image2.jpg?raw=true)

## How to Use

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/metar-encoder.git
   ```
2. Open the `index.html` file in your browser.
3. Fill out the form with the desired data (e.g., wind speed, temperature, etc.).
4. Click the "Generate METAR" button to get the string.

## Project Structure

- **`index.html`**: Contains the structure of the web page.
- **`style.css`**: Styling file for the website design.
- **`script.js`**: Logic for generating the METAR string.
- **`README.md`**: Project documentation.

## Example Output

Example of a generated METAR string:
```
LIRF 181200Z 21012KT 9999 SCT020 BKN080 12/07 Q1013 NOSIG
```
Explanation:
- **LIRF**: Airport code.
- **181200Z**: Day and time (18th of the month at 12:00 Zulu).
- **21012KT**: Wind direction and speed (210° at 12 knots).
- **9999**: Visibility (greater than 10 km).
- **SCT020 BKN080**: Cloud coverage (scattered at 2000 feet, broken at 8000 feet).
- **12/07**: Temperature and dew point (12°C, 7°C).
- **Q1013**: Atmospheric pressure (1013 hPa).
- **NOSIG**: No significant changes expected.

## Contributing

If you want to contribute:

1. Fork the repository.
2. Create a branch for your feature:
   ```bash
   git checkout -b feature-feature-name
   ```
3. Commit your changes:
   ```bash
   git commit -m "Added [feature description]"
   ```
4. Push the branch:
   ```bash
   git push origin feature-feature-name
   ```
5. Open a Pull Request.

## License

This project is distributed under the MIT license. For more information, see the `LICENSE` file.

## Contact

For any questions or reports:
- Email: [nicolodaniello8@gmail.com](mailto:nicolodaniello8@gmail.com)
- GitHub: [https://github.com/SignG3T](https://github.com/SignG3T)
