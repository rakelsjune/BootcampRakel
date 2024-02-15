@extends('layouts.admin')

@push('css-script')
    <link href="{{ asset('vendor/datatables/dataTables.bootstrap4.css') }}" rel="stylesheet">
@endpush

@section('main-content')

    <!-- Page Heading -->
    <h1 class="h3 mb-4 text-gray-800">{{ __('Categories') }}</h1>

    @if (session('success'))
        <div class="alert alert-success border-left-success alert-dismissible fade show" role="alert">
            {{ session('success') }}
            <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                <span aria-hidden="true">&times;</span>
            </button>
        </div>
    @endif

    @if ($errors->any())
        <div class="alert alert-danger border-left-danger" role="alert">
            <ul class="pl-4 my-2">
                @foreach ($errors->all() as $error)
                    <li>{{ $error }}</li>
                @endforeach
            </ul>
        </div>
    @endif

    <section class="section blog-wrap bg-gray">
		<div class="container">
			<div class="row">
				<div class="col-lg-12">
					<div class="row">
						<div class="col-lg-12">
							<form class="contact-form bg-white rounded p-5" id="comment-form" action="{{route("category.update", $categories->id)}}" method="POST">
								@csrf
                                @method('PUT')
								<div class="form-group">
									<label>Category Name</label>
									<input class="form-control" type="text" name="category-name" id="category-name" placeholder="input category name" value='{{ $categories->name }}' required>
								</div>
								<button class="btn btn-outline-primary float-right" type="submit" name="submit-category" id="submit-category">Save Category</button>
								<br>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
@endsection

@push('js-script')

<script src="{{ asset('vendor/datatables/jquery.dataTables.min.js') }}"></script>
<script src="{{ asset('vendor/datatables/dataTables.bootstrap4.min.js') }}"></script>
<script src="{{ asset('js/demo/datatables-demo.js') }}"></script>

@endpush
