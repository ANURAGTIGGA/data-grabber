Atlan Assignment

1. A basic overview of your project.

    This is a web-based application capable of running your own SQL queries or making use of some pre-defined queries to fetch data and         display the results on the output panel.
    You can easily switch between custom queries and pre-defined queries through a tab on the header.
    For better visibility and user experience we have 2 modes of display - list and grid, available through a toggle switch.
    I have tried to add meaningful error handling.
   
    This app is capable of handling large data in the UI due to the use of lazy loading.

3. The JavaScript framework you chose, along with any major plugins or packages you installed.

    framework/library used is

       React JS
       
    major packages used is
   
        react-infinite-scroll-component - for lazy loading of data

5. The page load time of your application, and how you measured this time.


6. Any optimisations you did to decrease the load time or increase performance.

    performance - 
    Rendering of large list of data can freeze/block the UI and reduce performance.
    I limited the rendering of data at once by implemented lazy loading by making use of react-infinite-scroll-component
