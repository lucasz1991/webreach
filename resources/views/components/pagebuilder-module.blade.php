<div  class="{{ $position }}" >
    @if($modules && count($modules) > 0)
        @foreach($modules as $module)
        <div  id="module-{{ $module->id }}" class="module-{{ $module->id }}">
            {!! $module->cleaned_html ?: $module->html !!}
            @if (filled($module->css))
                <style>{!! $module->css !!}</style>
            @endif
            @if (filled($module->js))
                <script>{!! $module->js !!}</script>
            @endif
        </div>
        @endforeach
    @endif
</div>
