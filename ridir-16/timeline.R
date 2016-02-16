require(timeline)

# Import timeline data
tl <- read.csv('timeline.csv', stringsAsFactors = FALSE)
tl$StartDate <- as.Date(tl$StartDate)
tl$EndDate <- as.Date(tl$EndDate)

# Plot
timeline(tl, label.col = 'Sub',
         group.col = 'Project',
         start.col = 'StartDate',
         end.col = 'EndDate')
