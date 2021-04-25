new Morris.Area({
    element: 'growth_chart',
    data: [
        { year: '2016', value: 20 },
        { year: '2017', value: 10 },
        { year: '2018', value: 25 },
        { year: '2019', value: 15 },
        { year: '2020', value: 20 }
    ],
    xkey: 'country',
    ykeys: ['value'],
    labels: ['Years'],
    parseTime: false,
    hoverCallback: function (index, options, content, row) {
        let chartPoint, customContent;

        chartPoint = options.data[index];

        customContent =
            "<div class='morris-hover-row-label'>"
            + `<p>Year: <a href='https://google.com/search?q=${chartPoint.year}'>`
            + chartPoint.year
            + "</a></p></div>";

        customContent +=
            "<div class='morris-hover-point'>"
            + "<p>Value: "
            + chartPoint.value
            + "</p></div>";

        return customContent;
    }
});
