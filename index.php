<?php include('header.php'); ?>
<main class="p-4 w-full h-full bg-slate-950">
    <div class="filter-section flex justify-center items-center">
        <select id="categoryFilter" class="p-2 border rounded-md bg-slate-800 text-white">
            <option value="all">All Categories</option>
            <option value="Electronic">Electronic</option>
            <option value="Clothing">Clothing</option>
            <option value="Footwear">Footwear</option>
            <option value="Mobile">Mobile</option>
        </select>
    </div>
    <div id="productContainer" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4"></div>
</main>
<?php include('footer.php'); ?>

<script src="script.js" defer></script>
</body>
</html>
