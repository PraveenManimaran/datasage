# DataSage - Data Visualization Platform

A powerful, modern data visualization and analysis platform built with vanilla HTML, CSS, and JavaScript. Transform your CSV data into beautiful, interactive charts and gain insights through comprehensive analysis tools.

## 🚀 [Live Demo](https://datasageviz.netlify.app)

## ✨ Features

### 📊 **Comprehensive Visualizations**
- **Multiple Chart Types**: Bar charts, line charts, scatter plots, histograms
- **Interactive Elements**: Hover tooltips, clickable data points, zoom/pan
- **Temporal Data Support**: Smart date/time detection and chronological sorting
- **Correlation Analysis**: Professional correlation matrices with color coding

### 🎨 **Modern UI/UX**
- **Accessibility First**: Dark mode, high contrast mode, colorblind-friendly options
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile
- **Professional Styling**: Clean, modern interface with smooth animations
- **Smart Warnings**: Helpful suggestions for optimal chart types

### 📈 **Advanced Analytics**
- **Statistical Summaries**: Automatic data type detection and statistics
- **Missing Data Analysis**: Comprehensive missing value reporting
- **Export Capabilities**: Download charts as PNG or data as CSV
- **Data Validation**: Smart error handling and user guidance

### 🔧 **Developer Features**
- **No Build Process**: Pure HTML/CSS/JS - deploy anywhere
- **Modular Code**: Well-organized, maintainable codebase
- **Extensible**: Easy to add new chart types and features

## 🎯 **Getting Started**

### **For Users**
1. **Upload Data**: Click "Upload Dataset" and select your CSV file
2. **Explore Visualizations**: Navigate to different tabs to analyze your data
3. **Create Charts**: Use the Plots tab to generate interactive visualizations
4. **Export Results**: Download charts or correlation matrices

### **For Developers**
```bash
# Clone the repository
git clone https://github.com/yourusername/datasage.git

# Navigate to project directory
cd datasage

# Open in your favorite editor
code .

# Serve locally (optional)
python -m http.server 8000
# or
npx serve .
```

## 📁 **Project Structure**

```
datasage/
├── index.html          # Landing page
├── dashboard.html      # Main dashboard
├── upload.html         # File upload interface
├── visualize.html      # Data visualization workspace
├── style.css          # Global styles
├── script.js          # Main JavaScript functionality
├── public/            # Static assets
│   ├── favicon.ico
│   ├── placeholder.svg
│   └── robots.txt
└── README.md          # This file
```

## 🛠 **Technologies Used**

- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **Charts**: Chart.js for interactive visualizations
- **Export**: html2canvas for PNG export
- **Styling**: Modern CSS with CSS Grid and Flexbox
- **Accessibility**: WCAG compliant with multiple accessibility modes

## 🌟 **Key Features Showcase**

### **Smart Data Type Detection**
Automatically identifies and handles:
- Numeric data (integers, floats)
- Categorical data (strings, factors)
- Temporal data (dates, times, datetimes)
- Boolean data (true/false, 0/1)

### **Enhanced Correlation Matrix**
- Beautiful diverging color scheme
- Interactive tooltips with detailed statistics
- Column selection and sorting options
- Export to CSV and PNG formats

### **Temporal Data Support**
- Automatic chronological sorting
- Smart date/time formatting
- Aggregation options for high-cardinality data
- One-click temporal type conversion

## 🚀 **Deployment**

### **Netlify (Recommended)**
1. Fork this repository
2. Connect your Netlify account to GitHub
3. Deploy directly from your repository
4. Automatic deployments on every push

### **Other Platforms**
- **Vercel**: Zero-config deployment
- **GitHub Pages**: Free hosting for public repos
- **AWS S3**: Static website hosting
- **Any Web Server**: Just upload the files!

## 🎨 **Demo Mode**

The application includes a comprehensive demo mode that:
- Guides new users through features
- Provides sample data and workflows
- Demonstrates all major capabilities
- Shows "Coming Soon" features

## 📝 **Browser Support**

- ✅ Chrome (recommended)
- ✅ Firefox
- ✅ Safari
- ✅ Edge
- ⚠️ IE11+ (limited support)

## 🤝 **Contributing**

We welcome contributions! Here's how you can help:

1. **Fork the repository**
2. **Create a feature branch**: `git checkout -b feature/amazing-feature`
3. **Commit your changes**: `git commit -m 'Add amazing feature'`
4. **Push to the branch**: `git push origin feature/amazing-feature`
5. **Open a Pull Request**

## 📋 **Roadmap**

### **Coming Soon**
- [ ] Advanced statistical analysis
- [ ] Data transformation tools
- [ ] More chart types (radar, treemap)
- [ ] PDF report generation
- [ ] Data export in multiple formats

### **Future Enhancements**
- [ ] Real-time data connections
- [ ] Collaborative features
- [ ] Custom chart themes
- [ ] API integration

## 📄 **License**

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 **Acknowledgments**

- [Chart.js](https://www.chartjs.org/) for excellent charting capabilities
- [html2canvas](https://html2canvas.hertzen.com/) for image export functionality
- [Inter Font](https://rsms.me/inter/) for beautiful typography

## 📧 **Contact**

- **Demo**: [Live Application](https://datasage-demo.netlify.app)
- **Issues**: [GitHub Issues](https://github.com/yourusername/datasage/issues)
- **Discussions**: [GitHub Discussions](https://github.com/yourusername/datasage/discussions)

---

**DataSage** - Transform your data into insights ✨
