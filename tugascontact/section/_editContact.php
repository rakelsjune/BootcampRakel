<section class="section">
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-lg-6">
                <h4>Edit Kontak</h4>
                <div class="contact-form mt-5">
                    <form action="" method="POST" enctype="multipart/form-data">
                        <input type="hidden" name="id" value="<?= $contactOldValue["id"] ?>">
                        <div class="form-group mb-4 pb-2">
                            <label class="form-label">Nama</label>
                            <input type="text" class="form-control shadow-none" name="name" value="<?= $contactOldValue["name"] ?>">
                        </div>
                        <div class="form-group mb-4 pb-2">
                            <label class="form-label">Email</label>
                            <input type="text" class="form-control shadow-none" name="email" value="<?= $contactOldValue["email"] ?>">
                        </div>
                        <div class="form-group mb-4 pb-2">
                            <label class="form-label">Telephone</label>
                            <input type="text" class="form-control shadow-none" name="phone" value="<?= $contactOldValue["phone"] ?>">
                        </div>
                        <div class="form-group mb-4 pb-2">
                            <label class="form-label">Birthday</label>
                            <input type="date" class="form-control shadow-none" name="birthday" value="<?= $contactOldValue["birthday"] ?>">
                        </div>
                        <button class="btn btn-secondary float-end" type="submit" name="submit">Edit</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</section>