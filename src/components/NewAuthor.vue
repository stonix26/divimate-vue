<template>
    <div id="new-author">
        <div class="row">
            <div class="col">
                <h1 class="display-4">New Author</h1>
            </div>
        </div>
        <div class="row">
            <div class="col">
                <form>
                    <div class="form-group">
                        <label>Author's Name</label>
                        <input type="text" class="form-control" required>
                    </div>
                    <div class="form-row">
                        <div class="form-group col-md-6">
                            <label>Service Type</label>
                            <select class="form-control">
                                <option selected>Choose...</option>
                                <option>...</option>
                            </select>
                        </div>
                        <div class="form-group col-md-6">
                            <label>Progress Status</label>
                            <select class="form-control">
                                <option selected>Choose...</option>
                                <option>...</option>
                            </select>
                        </div>
                    </div>
                    <div class="form-row">
                        <div class="form-group col-md-4">
                            <label>File Path</label>
                            <input type="text" class="form-control" required>
                        </div>
                        <div class="form-group col-md-4">
                            <label>Designer</label>
                            <select class="form-control">
                                <option selected>Choose...</option>
                                <option>...</option>
                            </select>
                        </div>
                        <div class="form-group col-md-4">
                            <label>Amazon Link</label>
                            <input type="text" class="form-control" required>
                        </div>
                        <div class="form-group col-md-12">
                            <label>Notes</label>
                            <textarea class="form-control" rows="8" required></textarea>
                        </div>
                    </div>
                    <button type="submit" class="btn btn-dark btn-lg"><i class="fa fa-save"></i> Submit</button>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'new-author',
    data() {
        return {}
    }
}
</script>