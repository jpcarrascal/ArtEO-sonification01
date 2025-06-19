#!/bin/bash

# Set directories
BACKUP_DIR="images-arteo-esa-originals"
SOURCE_DIR="images-arteo-esa/Coastal Zones"

# Log file
LOG_FILE="resize_report_coastal.txt"
echo "Coastal Zones Image Resize Report - $(date)" > $LOG_FILE
echo "----------------------------------------" >> $LOG_FILE

# Process all large coastal zone images
process_image() {
    img="$1"
    echo "Processing: $img"
    
    # Get file size before
    size_before=$(du -h "$img" | cut -f1)
    
    # Get dimensions
    width=$(sips -g pixelWidth "$img" | grep pixelWidth | awk '{print $2}')
    height=$(sips -g pixelHeight "$img" | grep pixelHeight | awk '{print $2}')
    
    # Create backup directory structure
    backup_path="$BACKUP_DIR/$img"
    backup_dir=$(dirname "$backup_path")
    mkdir -p "$backup_dir"
    
    # Copy to backup
    cp "$img" "$backup_path"
    
    # Determine which dimension is shorter and resize accordingly
    if [ "$width" -le "$height" ]; then
        # Width is shorter or equal
        if [ "$width" -gt 2000 ]; then
            echo "Resizing width to 2000px (original: ${width}x${height})"
            sips --resampleWidth 2000 "$img" > /dev/null
        else
            echo "Width already <= 2000px (${width}x${height}), no resize needed"
        fi
    else
        # Height is shorter
        if [ "$height" -gt 2000 ]; then
            echo "Resizing height to 2000px (original: ${width}x${height})"
            sips --resampleHeight 2000 "$img" > /dev/null
        else
            echo "Height already <= 2000px (${width}x${height}), no resize needed"
        fi
    fi
    
    # Get new dimensions and size
    new_width=$(sips -g pixelWidth "$img" | grep pixelWidth | awk '{print $2}')
    new_height=$(sips -g pixelHeight "$img" | grep pixelHeight | awk '{print $2}')
    size_after=$(du -h "$img" | cut -f1)
    
    # Log the results
    echo "$img: $width x $height ($size_before) -> $new_width x $new_height ($size_after)" >> $LOG_FILE
}

# Find coastal zone images larger than 3MB
find "$SOURCE_DIR" -name "*.jpg" -type f -size +3M | while read -r img; do
    process_image "$img"
done

echo "All coastal images processed. Check $LOG_FILE for details."
