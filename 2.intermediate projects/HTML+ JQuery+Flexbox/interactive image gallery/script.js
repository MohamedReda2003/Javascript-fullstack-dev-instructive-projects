$(document).ready(function() {
    const images = [
        { src: 'https://picsum.photos/id/10/800/600', category: 'nature', caption: 'Beautiful landscape' },
        { src: 'https://picsum.photos/id/20/800/600', category: 'city', caption: 'City skyline' },
        { src: 'https://picsum.photos/id/30/800/600', category: 'technology', caption: 'Modern gadget' },
        { src: 'https://picsum.photos/id/40/800/600', category: 'nature', caption: 'Mountain view' },
        { src: 'https://picsum.photos/id/50/800/600', category: 'city', caption: 'Urban street' },
        { src: 'https://picsum.photos/id/60/800/600', category: 'technology', caption: 'Futuristic design' },
        { src: 'https://picsum.photos/id/70/800/600', category: 'nature', caption: 'Serene lake' },
        { src: 'https://picsum.photos/id/80/800/600', category: 'city', caption: 'Night city' },
        { src: 'https://picsum.photos/id/90/800/600', category: 'technology', caption: 'Smart home' },
    ];

    function loadGallery() {
        const gallery = $('.gallery');
        images.forEach((image, index) => {
            const item = $(`
                <div class="gallery-item" data-category="${image.category}">
                    <img src="${image.src}" alt="${image.caption}" loading="lazy">
                    <div class="caption">${image.caption}</div>
                </div>
            `);
            gallery.append(item);

            // Animate items on load
            setTimeout(() => {
                item.css('opacity', '1');
            }, index * 100);
        });
    }

    loadGallery();

    // Filtering
    $('.filter-btn').click(function() {
        $('.filter-btn').removeClass('active');
        $(this).addClass('active');

        const filter = $(this).data('filter');
        $('.gallery-item').each(function() {
            if (filter === 'all' || $(this).data('category') === filter) {
                $(this).fadeIn();
            } else {
                $(this).fadeOut();
            }
        });
    });

    // Lightbox
    $('.gallery').on('click', '.gallery-item', function() {
        const img = $(this).find('img');
        const caption = $(this).find('.caption').text();

        $('#lightbox-img').attr('src', img.attr('src'));
        $('#lightbox-caption').text(caption);
        $('#lightbox').fadeIn();
    });

    $('.lightbox .close').click(function() {
        $('#lightbox').fadeOut();
    });

    // Close lightbox when clicking outside the image
    $('#lightbox').click(function(e) {
        if (e.target !== this) return;
        $('#lightbox').fadeOut();
    });

    // Lazy loading
    $(window).on('scroll', function() {
        $('.gallery-item img').each(function() {
            if ($(this).offset().top < window.innerHeight + $(window).scrollTop() + 200) {
                const src = $(this).data('src');
                $(this).attr('src', src);
            }
        });
    });

    // Infinite scrolling (simulated)
    $(window).on('scroll', function() {
        if ($(window).scrollTop() + $(window).height() > $(document).height() - 100) {
            loadMoreImages();
        }
    });

    function loadMoreImages() {
        // Simulate loading more images
        for (let i = 0; i < 3; i++) {
            const randomImage = images[Math.floor(Math.random() * images.length)];
            const item = $(`
                <div class="gallery-item" data-category="${randomImage.category}">
                    <img src="${randomImage.src}" alt="${randomImage.caption}" loading="lazy">
                    <div class="caption">${randomImage.caption}</div>
                </div>
            `);
            $('.gallery').append(item);
            item.hide().fadeIn();
        }
    }
});