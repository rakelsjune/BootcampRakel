@extends('layouts.admin')

@push('css-script')
    <link href="{{ asset('css/trix.css') }}" rel="stylesheet">
@endpush

@section('main-content')
    <!-- Page Heading -->
    <h1 class="h3 mb-4 text-gray-800">{{ __('Create Category') }}</h1>

    <div class="card o-hidden border-0 shadow-lg">
        <div class="card-body p-0">
            <!-- Nested Row within Card Body -->
            <div class="row justify-content-center">
                <div class="col-lg-10">
                    <div class="p-5">
                        <!-- /help text & error -->

                        <!-- forms -->
                        <form method="POST" action="{{ route('category.store') }}" autocomplete="off" enctype="multipart/form-data">
                            @csrf
                            <div class="form-group">
                                <input type="text" name="category" class="form-control form-control-user @error('name') is-invalid @enderror"
                                    placeholder="Enter name..." value="{{ old('name') }}" id="name" required>
                                @error('name')
                                <div class="ml-3 invalid-feedback">
                                    {{ $message }}
                                </div>
                                @enderror
                            </div>


                            <button class="btn btn-primary btn-user" type="submit">Add Category</button>
                        </form>
                        <!-- forms -->
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection

@push('js-script')
    <script src="{{ asset('js/trix.js') }}"></script>
@endpush
