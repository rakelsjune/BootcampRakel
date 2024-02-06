<section class="section">
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-lg-12 content">
                <div class="float-end mb-3">
                    <a class="btn btn-primary mx-1" href="addContact.php">Add</a>
                </div>
                <form action="" method="POST">
                        <div class="input-group mb-3">
                            <input type="text" class="form-control" name="search-input" placeholder="Search username or email">
                            <button class="btn btn-outline-secondary" type="submit" name="search">Search</button>
                        </div>
                    </form>
                <table>
                    <thead>
                        <tr>
                            <th>No.</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>Birthday</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <?php $i = 1 ?>
                        <?php foreach ($contactViews as $data): ?>
                        <tr>
                            <td><?= $i ?></td>
                            <td><?= $data["name"] ?></td>
                            <td><?= $data["email"] ?></td>
                            <td><?= $data["phone"] ?></td>
                            <td><?= $data["birthday"] ?></td>
                            <td style="width: 250px;">
                                <a class="btn btn-secondary mx-1" href="editContact.php?id=<?= $data["id"] ?>">Edit</a>
                                <a class="btn btn-danger mx-1" href="deleteContact.php?id=<?= $data["id"] ?>" onclick="return confirm('Are u Sure?');">Delete</a>
                            </td>
                        </tr>
                        <?php $i++ ?>
                        <?php endforeach; ?>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</section>
