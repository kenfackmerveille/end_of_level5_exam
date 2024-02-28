@extends("layouts.app")
@section("title", "Tous les articles")
@section("content")

	<h1>Tous les articles</h1>

	<p>
		<!-- Lien pour créer un nouveau contact : "posts.create" -->
		<a href="{{ route('posts.create') }}" title="Créer un contact" >Créer un nouveau contact</a>
	</p>

	<!-- Le tableau pour lister les contact -->
	<table border="1" >
		<thead>
			<tr>
				<th>nom</th>
				<th colspan="2" >Opérations</th>
			</tr>
		</thead>
		<tbody>
			<!-- On parcourt la collection de contact -->
			@foreach ($posts as $post)
			<tr>
				<td>
					<!-- Lien pour afficher un contact : "posts.show" -->
					<a href="{{ route('posts.show', $post) }}" title="Lire le contact" >{{ $post->name }}</a>
				</td>
				<td>
					<!-- Lien pour modifier un contact : "posts.edit" -->
					<a href="{{ route('posts.edit', $post) }}" title="Modifier le contact" >Modifier</a>
				</td>
				<td>
					<!-- Formulaire pour supprimer un contact : "posts.destroy" -->
					<form method="POST" action="{{ route('posts.destroy', $post) }}" >
						<!-- CSRF token -->
						@csrf
						<!-- <input type="hidden" name="_method" value="DELETE"> -->
						@method("DELETE")
						<input type="submit" value=" Supprimer" >
					</form>
				</td>
			</tr>
			@endforeach
		</tbody>
	</table>
	
@endsection